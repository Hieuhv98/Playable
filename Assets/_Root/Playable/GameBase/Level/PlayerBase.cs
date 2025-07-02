using Spine.Unity;
using System;
using System.Collections.Generic;
using UnityEngine;

public class PlayerBase : MonoBehaviour
{
    [SerializeField] protected AnimatorComponent animator;
    [SerializeField] protected AudioBase audioBase;

    [SerializeField] GameObject center;
    public GameObject Center => center;

    private int _playAnimationCount = 0;
    public void Awake()
    {
        animator.Init();
        _playAnimationCount = 0;
    }
    public void PlayAnimation(AnimationBase animation, int trackIndex = 0, Action actionComplete = null) 
    {
        if (audioBase) audioBase.Play(animation.Sound);
        animator.PlayAnimation(trackIndex, animation.AnimationName, animation.IsLoop, actionComplete: ()=> actionComplete?.Invoke());
    }
    public void PlayAnimation(List<AnimationBase> animationBases, Action actionStepComplete = null, Action actionComplete = null)
    {
        if (animationBases.Count == 0)
        {
            actionComplete?.Invoke();
            return;
        }
        _playAnimationCount = 0;
        Play();

        void Play() 
        {
            PlayAnimation(animationBases[_playAnimationCount], actionComplete: ()=>
            {
                _playAnimationCount++;
                if (_playAnimationCount >= animationBases.Count)
                {
                    actionComplete?.Invoke();
                }
                else
                {
                    actionStepComplete?.Invoke();
                    Play();
                }
            });
        }

    }
}

[Serializable]
public class AnimationBase 
{
    [SerializeField, SpineAnimation] string animationName;
    [SerializeField] Sound sound;
    [SerializeField] bool isLoop;

    public string AnimationName => animationName;
    public Sound Sound => sound;
    public bool IsLoop => isLoop;
}