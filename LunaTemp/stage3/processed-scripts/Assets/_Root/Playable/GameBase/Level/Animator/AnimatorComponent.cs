using System;
using System.Collections.Generic;
using UnityEngine;

public abstract class AnimatorComponent : MonoBehaviour
{
    protected Spine.Skeleton skeleton;
    protected Spine.AnimationState animationState;
    public Spine.Skeleton Skeleton => skeleton;
    public Spine.AnimationState AnimationState => animationState;

    protected string animationName;
    public string AnimationName => animationName;

    protected Dictionary<string, Action> cacheEvent = new Dictionary<string, Action>();

    public virtual void Init() 
    {
        animationState.Event -= HandleAnimationStateEvent;
        animationState.Event += HandleAnimationStateEvent;
    }

    public abstract void Initialize(bool reload = false);
    public abstract void ChangeAnimationName(string animationName);
    public abstract void FlipX(bool isFlipX = false);
    public abstract void FlipY(bool isFlipY = false);
    public void AddAnimation(int trackIndex, string animationName, bool loop, float timeDelay = 0)
    {
        animationState.AddAnimation(trackIndex, animationName, loop, timeDelay);
    }
    public void PlayAnimation(int trackIndex, string animationName, bool loop = false, float speed = 1, Action actionComplete = null)
    {
        this.animationName = animationName;
        animationState.ClearTrack(trackIndex);
        animationState.TimeScale = speed;
        var trackEntry = animationState.SetAnimation(trackIndex, animationName, loop);
        trackEntry.Complete += _ => 
        {
            actionComplete?.Invoke();
        };
        animationState.Apply(skeleton);
    }

    public void RegisterEvent(string eventName, Action actionEvent = null)
    {
        if (cacheEvent.ContainsKey(eventName))
        {
            cacheEvent[eventName] = actionEvent;
        }
        else
        {
            cacheEvent.Add(eventName, actionEvent);
        }
    }

    protected void HandleAnimationStateEvent(Spine.TrackEntry trackEntry, Spine.Event e)
    {
        Action action = null;
        if(cacheEvent.TryGetValue(e.Data.Name, out action)) 
        {
            action?.Invoke();
        }
    }
    public void Clear() { cacheEvent.Clear(); }

    public void StopAnimation()
    {
        animationState.TimeScale = 0;
    }
}