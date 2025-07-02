using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Level_23_06_25 : LevelBase
{
    [SerializeField] private King king;
    [SerializeField] private Point pointStart;

    [SerializeField] private List<Pin> listPinMove = new List<Pin>();
    [SerializeField] private List<Point> listPoint = new List<Point>();

    [SerializeField] private CameraConfig cameraConfig;

    [SerializeField] float timeTutorial = 5f;
    [SerializeField] float timeUp = 10f;
    [SerializeField] float timePlayMax = 15f;
    [SerializeField] Container container;
    [SerializeField] Spawn spawn;
    [SerializeField] GameObject warring;
    [SerializeField] GameObject hand;
    [SerializeField] GameObject pointEnd;

    private int _pointCountCurrent = 0;
    public void OnEnable()
    {
       foreach(var pin in listPinMove) 
       {
            pin.ActionStartMove += OnPinMove;
       } 
    }
    public void OnDisable()
    {
        foreach (var pin in listPinMove)
        {
            pin.ActionStartMove -= OnPinMove;
        }
    }
    public override void Init()
    {
        _pointCountCurrent = 0;
        //MoveToPoint(pointStart);

        //spawn.Create(200);
        _isCompleteTutorial = false;
        spawn.Play();
        warring.SetActive(false);
        _coroutineTutorial = StartCoroutine(IETimeTutorial());
        hand.SetActive(true);
        king.PlayIdle();
    }
    void MoveToPoint(Point point) 
    {
        cameraConfig.CameraCenterX = point.CameraCenterX;
        cameraConfig.CameraCenterY = point.CameraCenterY;
        king.PlayAnimation(point.StarAnimation);
        king.MoveToPos(point.Position, ()=> king.PlayAnimation(point.EndAnimation));
        king.Flip(point.IsFlipX);
    }

    void OnPinMove(Pin pin) 
    {
        if (!_isCompleteTutorial) OnCompleteTutorial();
        if (listPoint.Count == 0) return;
        bool isCanMove = true;
        var index = listPinMove.IndexOf(pin);
        for(int i = 0; i < index; i++) 
        {
            if (!listPinMove[i].IsMoved) 
            {
                isCanMove = false;
                break;
            }
        }

        if (isCanMove) 
        {
            for(int i = index; i< listPinMove.Count; i++) 
            {
                if(i == listPinMove.Count - 1) MoveToPoint(listPoint[i]);
                else if (!listPinMove[i].IsMoved) 
                {
                    MoveToPoint(listPoint[i - 1]);
                    break;
                }
            }
        }
    }

    private Coroutine _coroutinePlay, _coroutineTutorial, _coroutineTimeUp;
    private bool _isCompleteTutorial = false;

    IEnumerator IETimeTutorial()
    {
        yield return new WaitForSeconds(timeTutorial);
        if (!_isCompleteTutorial) spawn.Stop();
    }

    public void OnCompleteTutorial()
    {
        _isCompleteTutorial = true;
        king.PlayPush();
        hand.SetActive(false);
        spawn.Play();
        _coroutineTimeUp = StartCoroutine(IETimeUp());
        _coroutinePlay = StartCoroutine(IETimePlay());
    }
    IEnumerator IETimePlay()
    {
        yield return new WaitForSeconds(timePlayMax);
        Lose();
    }
    IEnumerator IETimeUp()
    {
        yield return new WaitForSeconds(timeUp);
        warring.SetActive(true);
        king.MoveToPos(pointEnd.transform.position, timePlayMax - timeUp, () =>
        {
            king.Lose();
        });
    }
    public override void Lose()
    {
        if (_coroutinePlay != null) StopCoroutine(_coroutinePlay);
        if (_coroutineTimeUp != null) StopCoroutine(_coroutineTimeUp);
        if (_coroutineTutorial != null) StopCoroutine(_coroutineTutorial);
        container.Stop();
        spawn.Stop();
        base.Lose();
    }
}