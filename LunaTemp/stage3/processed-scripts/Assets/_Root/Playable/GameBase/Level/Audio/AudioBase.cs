using System;
using System.Collections;
using UnityEngine;

[RequireComponent(typeof(AudioSource))]
public class AudioBase : MonoBehaviour
{
    [SerializeField] AudioSource audioSource;

    private Coroutine _coroutine;
    public void Play(Sound sound, Action actionComplete = null) 
    {
        if (sound.Clip == null)
        {
            actionComplete?.Invoke();
            return;
        }
        if (audioSource == null) audioSource = GetComponent<AudioSource>();

        _coroutine = StartCoroutine(IETime(sound.Delay, () => 
        {
            audioSource.loop = sound.IsLoop;

            if (sound.IsLoop) 
            {
                audioSource.clip = sound.Clip;
                audioSource.Play();
            }
            else 
            {
                audioSource.PlayOneShot(sound.Clip, sound.Volume);
            }
            _coroutine = StartCoroutine(IETime(sound.Clip.length, actionComplete));
        }));
    }
    IEnumerator IETime(float time, Action actionComplete = null) 
    {
        yield return new WaitForSeconds(time);
        actionComplete?.Invoke();
    }
    private void OnDisable()
    {
        Stop();
    }
    public void Stop() 
    {
        if (audioSource)
        {
            audioSource.clip = null;
            audioSource.loop = false;
            audioSource.Stop();
        }
        if(_coroutine != null) StopCoroutine(_coroutine);
    }
}

[Serializable]
public class Sound 
{
    [SerializeField] AudioClip clip;
    [SerializeField, Range(0, 1)] float volume = 1f;
    [SerializeField] bool isLoop = false;
    [SerializeField] float delay = 0;

    public AudioClip Clip => clip;
    public float Volume => volume;
    public bool IsLoop => isLoop;
    public float Delay => delay;
}