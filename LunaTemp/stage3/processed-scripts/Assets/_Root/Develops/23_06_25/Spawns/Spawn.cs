using Gamee.Hiuk.Pattern;
using System.Collections.Generic;
using UnityEngine;

public class Spawn : MonoBehaviour
{
    [SerializeField] private Transform root;
    [SerializeField] private List<GameObject> listObject = new List<GameObject>();
    [SerializeField] private int countCreateOnStart = 50;
    [SerializeField] private int countCreateMax = 1000;
    [SerializeField] private float randMin = -.5f;
    [SerializeField] private float randMax = .5f;
    [SerializeField] private float timeCreate = .15f;
    [SerializeField] private AudioBase audioBase;
    [SerializeField] private Sound soundStart;

    private int _count;
    private bool _isCreate = false;
    private float _timeCache = 0f;

    public void Awake()
    {
        _count = 0;
        _isCreate = false;

        if (root == null)
        {
            root = new GameObject("SpawnRoot").transform;
            root.SetParent(transform);
            root.transform.position = Vector3.zero;
        }
    }
    private void Start()
    {
        if(audioBase) audioBase.Play(soundStart);
    }
    public void Create(int count) 
    {
        for (int i = 0; i < count; i++)
        {
            SpawnObject();
        }
    }
    public void SpawnObject()
    {
        if (_count >= countCreateMax)
        {
            Debug.LogWarning("Max spawn limit reached.");
            return;
        }

        var pos = root.position + new Vector3(Random.Range(0, randMax), Random.Range(randMin, randMax), 0);
        Instantiate(listObject[Random.Range(0, listObject.Count)], pos, Quaternion.identity);
        _count++;
    }
    public void Update()
    {
        if (_isCreate) 
        {
            _timeCache += Time.deltaTime;
            if(_timeCache >= timeCreate)
            {
                _timeCache = 0f;
                SpawnObject();
            }
        }
    }

    public void Play() { _isCreate = true; }
    public void Stop() { _isCreate = false; }
    public void OnDisable()
    {
        Stop();
    }
}