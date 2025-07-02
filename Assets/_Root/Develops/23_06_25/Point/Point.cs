using UnityEngine;

public class Point : MonoBehaviour
{
    [SerializeField] private float cameraCenterX = 0.5f;
    [SerializeField] private float cameraCenterY = 0.25f;
    [SerializeField] private AnimationBase starAnimation;
    [SerializeField] private AnimationBase endAnimation;
    [SerializeField] private bool isFlipX = false;

    public float CameraCenterX => cameraCenterX;
    public float CameraCenterY => cameraCenterY;
    public Vector2 Position => transform.position;
    public AnimationBase StarAnimation => starAnimation;
    public AnimationBase EndAnimation => endAnimation;
    public bool IsFlipX => isFlipX;
}