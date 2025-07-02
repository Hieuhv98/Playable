using DG.Tweening;
using System;
using UnityEngine;
public static class Extensions
{
    public static void Clear(this Transform transform)
    {
        for (int i = 0; i < transform.childCount; i++)
        {
            UnityEngine.Object.Destroy(transform.GetChild(i).gameObject);
        }
    }
    public static float GetAnimationLenght(this Animator animator, string animationName, float speedAnimation = 1)
    {
        AnimationClip[] clips = animator.runtimeAnimatorController.animationClips;
        foreach (AnimationClip clip in clips)
        {
            if (clip.name.Equals(animationName)) { return clip.length / speedAnimation; }
        }
        return 4f;
    }
    public static void DoScale(this GameObject go, float scale, float timeScale = 0.25f, float timeBack = 0.15f, Action actionCompleted = null, Ease ease = Ease.InExpo)
    {
        go.transform.DOKill(true);
        Vector3 scaleDeaut = go.transform.localScale;
        go.transform.DOScale(scaleDeaut * scale, timeScale).SetEase(ease).OnComplete(() =>
        {
            go.transform.DOScale(scaleDeaut, timeBack).OnComplete(() => actionCompleted?.Invoke());
        });
    }
    public static void DoDelay(this GameObject go, float time = 1f, bool isScale = false)
    {
        go.transform.DOKill(true);
        go.SetActive(false);
        DOTween.Sequence().SetDelay(time).OnComplete(() =>
        {
            if (isScale) go.DoScale(1.25f);
            go.SetActive(true);
        });
    }
    #region rectTransform
    public static void SetLeft(this RectTransform rt, float left)
    {
        rt.offsetMin = new Vector2(left, rt.offsetMin.y);
    }

    public static void SetRight(this RectTransform rt, float right)
    {
        rt.offsetMax = new Vector2(-right, rt.offsetMax.y);
    }

    public static void SetTop(this RectTransform rt, float top)
    {
        rt.offsetMax = new Vector2(rt.offsetMax.x, -top);
    }

    public static void SetBottom(this RectTransform rt, float bottom)
    {
        rt.offsetMin = new Vector2(rt.offsetMin.x, bottom);
    }
    #endregion
}