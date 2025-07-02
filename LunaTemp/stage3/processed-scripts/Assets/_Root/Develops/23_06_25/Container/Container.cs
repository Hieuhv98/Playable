using UnityEngine;

public class Container : MonoBehaviour
{
    [SerializeField] private AudioBase audioBase;
    [SerializeField] private Sound soundDrop;
    [SerializeField] private BoxCollider2D box;
    [SerializeField] private LayerMask layer;
    [SerializeField] private int countMax = 300;
    [SerializeField] private Spawn spawn1;

    private int _count, _countCache;
    private bool _isPlaySoundDrop = false;
    public int Count => _count;
    private bool _isPlaying = false;
    private void Start()
    {
        _count = 0;
        _countCache = _count;
        _isPlaying = true;
        _isPlaySoundDrop = false;
    }
    public void Update()
    {
        if(!_isPlaying) return;

        _count = Physics2D.BoxCastAll(
            box.transform.position,
            box.size,
            0f,
            Vector2.zero,
            0f,
            layer
        ).Length;

        if(_countCache > _count && !_isPlaySoundDrop) 
        {
            _isPlaySoundDrop = true;
            if (audioBase) audioBase.Play(soundDrop, () => _isPlaySoundDrop = false);
        }
        _countCache = _count;

        if (_count >= countMax)
        {
            spawn1?.Stop();
        }
        else
        {
            spawn1?.Play();
        }
    }
    public void Stop() => _isPlaying = false;
}