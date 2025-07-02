using UnityEngine;

public class PopupBase : MonoBehaviour
{
    [SerializeField] GameObject content;
    [SerializeField] Animator animator;
    [SerializeField] string animShowName = "Show";

    [Header("Auido")]
    [SerializeField] AudioBase audioBase;
    [SerializeField] Sound soundOpen;
    private void Start()
    {
        Hide();
    }
    public void Show() 
    {
        if(content) content.SetActive(true);
        if(animator) animator.Play(animShowName);
        if(soundOpen.Clip) audioBase?.Play(soundOpen);
    }
    public void Hide() { content?.SetActive(false);}
}