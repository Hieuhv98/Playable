using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EndCardDelayShow : MonoBehaviour
{
    [SerializeField] float delayTime = 2f;
    [SerializeField] GameObject group;

    Coroutine _coroutine;
    private void Start()
    {
        group?.SetActive(false);
        _coroutine = StartCoroutine(DelayShow());
    }
    private void OnDestroy()
    {
        if (_coroutine != null) StopCoroutine(_coroutine);
    }

    IEnumerator DelayShow()
    {
        yield return new WaitForSeconds(delayTime);
        group?.SetActive(true);
    }
}