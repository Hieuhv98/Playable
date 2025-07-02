using UnityEngine;
using DG.Tweening;

public class Scale : MonoBehaviour
{
    [SerializeField] bool isAuto = true;
    [SerializeField, Range(0, 10)] float scale = 1.15f;
    [SerializeField] Ease ease = Ease.Linear;

    Vector3 scaleDefault = Vector3.one;
    public void Awake()
    {
        scaleDefault = transform.localScale;
        if (isAuto) Play();
    }

    public void Play()
    {
        transform.localScale = scaleDefault;
        transform.DOScale(scaleDefault * scale, 0.5f).SetLoops(-1, LoopType.Yoyo).SetEase(ease);
    }
    public void Default()
    {
        this.transform.DOKill();
        transform.localScale = scaleDefault;
    }
}