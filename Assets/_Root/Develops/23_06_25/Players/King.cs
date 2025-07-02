using DG.Tweening;
using System;
using UnityEngine;

public class King : PlayerBase
{
    [SerializeField] private Rigidbody2D rb;
    [SerializeField] private float speed = 5f;
    [SerializeField] private Ease easeMove;
    [SerializeField] private Follow box;

    private Tween _tweenMove;
    public void MoveToPos(Vector2 pos, Action actionComplete = null)
    {
        _tweenMove.Kill();
        _tweenMove = transform.DOMoveX(pos.x, Vector2.Distance(rb.position, pos) / speed)
            .SetEase(easeMove)
            .OnComplete(() =>
            {
                actionComplete?.Invoke();
                OnMoveComplete();
            });
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