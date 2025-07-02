using System;
using UnityEngine;
public abstract class LevelBase : MonoBehaviour
{
    [SerializeField] protected AudioBase audioBG;
    [SerializeField] protected Sound soundBG;
    [SerializeField] protected AudioBase audioFx;

    public Action ActionWin;
    public Action ActionLose;
    protected bool _isPlaying = false;

    public abstract void Init();
    public virtual void Win() 
    {
        if (!_isPlaying) return;
        _isPlaying = false;
        ActionWin?.Invoke();
    }
    public virtual void Lose() 
    {
        if (!_isPlaying) return;
        _isPlaying = false;
        ActionLose?.Invoke(); 
    }
    public void PlaySoundBG() { audioBG?.Play(soundBG); }
    public void StopSoundBG() { audioBG?.Stop(); }
    
    public void Start()
    {
        Init();
        PlaySoundBG();
        _isPlaying = true;
    }
    public void Clear() 
    {
        ActionWin = null;
        ActionLose = null;
    }
}