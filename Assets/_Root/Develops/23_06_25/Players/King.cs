using DG.Tweening;
using System;
using System.Collections.Generic;
using UnityEngine;

public class King : PlayerBase
{
    [SerializeField] private float speed = 5f;
    [SerializeField] private Ease easeMove;
    [SerializeField] private Follow box;
    [SerializeField] private AnimationBase animIdle;
    [SerializeField] private List<AnimationBase> listAnimation = new List<AnimationBase>();
    [SerializeField] private GameObject smoke;

    private Tween _tweenMove;
    private void Start()
    {
        if(smoke) smoke.SetActive(false);
    }
    public void PlayIdle() => PlayAnimation(animIdle);
    public void PlayPush() => PlayAnimation(listAnimation);
    public void MoveToPos(Vector2 pos, Action actionComplete = null)
    {
        _tweenMove.Kill();
        _tweenMove = transform.DOMoveX(pos.x, Vector2.Distance(transform.position, pos) / speed)
            .SetEase(easeMove)
            .OnComplete(() =>
            {
                actionComplete?.Invoke();
                OnMoveComplete();
            });
    }
    public void MoveToPos(Vector2 pos, float time, Action actionComplete = null)
    {
        _tweenMove.Kill();
        _tweenMove = transform.DOMoveX(pos.x, time)
            .SetEase(easeMove)
            .OnComplete(() =>
            {
                actionComplete?.Invoke();
                OnMoveComplete();
            });
    }

    public void Lose()
    {
        if(smoke) smoke.SetActive(true);
        animator.gameObject.SetActive(false);
    }
    void OnMoveComplete() 
    {
    }

    public void Flip(bool isFlipX) 
    {
        box.DeActiveCol();
        var x = isFlipX ? -1 : 1;
        transform.transform.localScale = new Vector3(x, transform.transform.localScale.y, transform.transform.localScale.z);
        DOTween.Sequence().SetDelay(0.05f).OnComplete(() => box.ActiveCol());
    }
    private void OnDisable()
    {
        if(_tweenMove != null) _tweenMove.Kill();
    }
}