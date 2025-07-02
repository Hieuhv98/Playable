using DG.Tweening;
using Gamee.Hiuk.Game.Input;
using System;
using UnityEngine;

public class Pin : MonoBehaviour, ITouch
{
    [SerializeField] private float speed = 50;
    [SerializeField] private float distance = 50f;

    [Header("Audio")]
    [SerializeField] private AudioBase audioBase;
    [SerializeField] private Sound soundMove;

    private bool _isMoved = false;
    public Action<Pin> ActionStartMove;
    public bool IsMoved => _isMoved;
    public void Move() 
    {
        _isMoved = true;
        ActionStartMove?.Invoke(this);
        transform.DOMove(-transform.right * distance, distance / speed);
        if (audioBase) audioBase.Play(soundMove);
    }
    public void TouchBegan(Vector2 pos)
    {
        Move();
    }

    public void TouchEnded(Vector2 pos)
    {
    }

    public void TouchMoved(Vector2 pos)
    {
    }
}