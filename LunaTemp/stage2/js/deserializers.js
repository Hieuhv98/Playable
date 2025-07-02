var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i512 = root || request.c( 'UnityEngine.JointSpring' )
  var i513 = data
  i512.spring = i513[0]
  i512.damper = i513[1]
  i512.targetPosition = i513[2]
  return i512
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i514 = root || request.c( 'UnityEngine.JointMotor' )
  var i515 = data
  i514.m_TargetVelocity = i515[0]
  i514.m_Force = i515[1]
  i514.m_FreeSpin = i515[2]
  return i514
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i516 = root || request.c( 'UnityEngine.JointLimits' )
  var i517 = data
  i516.m_Min = i517[0]
  i516.m_Max = i517[1]
  i516.m_Bounciness = i517[2]
  i516.m_BounceMinVelocity = i517[3]
  i516.m_ContactDistance = i517[4]
  i516.minBounce = i517[5]
  i516.maxBounce = i517[6]
  return i516
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i518 = root || request.c( 'UnityEngine.JointDrive' )
  var i519 = data
  i518.m_PositionSpring = i519[0]
  i518.m_PositionDamper = i519[1]
  i518.m_MaximumForce = i519[2]
  i518.m_UseAcceleration = i519[3]
  return i518
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i520 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i521 = data
  i520.m_Spring = i521[0]
  i520.m_Damper = i521[1]
  return i520
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i522 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i523 = data
  i522.m_Limit = i523[0]
  i522.m_Bounciness = i523[1]
  i522.m_ContactDistance = i523[2]
  return i522
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i524 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i525 = data
  i524.m_ExtremumSlip = i525[0]
  i524.m_ExtremumValue = i525[1]
  i524.m_AsymptoteSlip = i525[2]
  i524.m_AsymptoteValue = i525[3]
  i524.m_Stiffness = i525[4]
  return i524
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i526 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i527 = data
  i526.m_LowerAngle = i527[0]
  i526.m_UpperAngle = i527[1]
  return i526
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i528 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i529 = data
  i528.m_MotorSpeed = i529[0]
  i528.m_MaximumMotorTorque = i529[1]
  return i528
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i530 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i531 = data
  i530.m_DampingRatio = i531[0]
  i530.m_Frequency = i531[1]
  i530.m_Angle = i531[2]
  return i530
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i533 = data
  i532.m_LowerTranslation = i533[0]
  i532.m_UpperTranslation = i533[1]
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i534 = root || new pc.UnityMaterial()
  var i535 = data
  i534.name = i535[0]
  request.r(i535[1], i535[2], 0, i534, 'shader')
  i534.renderQueue = i535[3]
  i534.enableInstancing = !!i535[4]
  var i537 = i535[5]
  var i536 = []
  for(var i = 0; i < i537.length; i += 1) {
    i536.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i537[i + 0]) );
  }
  i534.floatParameters = i536
  var i539 = i535[6]
  var i538 = []
  for(var i = 0; i < i539.length; i += 1) {
    i538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i539[i + 0]) );
  }
  i534.colorParameters = i538
  var i541 = i535[7]
  var i540 = []
  for(var i = 0; i < i541.length; i += 1) {
    i540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i541[i + 0]) );
  }
  i534.vectorParameters = i540
  var i543 = i535[8]
  var i542 = []
  for(var i = 0; i < i543.length; i += 1) {
    i542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i543[i + 0]) );
  }
  i534.textureParameters = i542
  var i545 = i535[9]
  var i544 = []
  for(var i = 0; i < i545.length; i += 1) {
    i544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i545[i + 0]) );
  }
  i534.materialFlags = i544
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i549 = data
  i548.name = i549[0]
  i548.value = i549[1]
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i553 = data
  i552.name = i553[0]
  i552.value = new pc.Color(i553[1], i553[2], i553[3], i553[4])
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i557 = data
  i556.name = i557[0]
  i556.value = new pc.Vec4( i557[1], i557[2], i557[3], i557[4] )
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i561 = data
  i560.name = i561[0]
  request.r(i561[1], i561[2], 0, i560, 'value')
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i565 = data
  i564.name = i565[0]
  i564.enabled = !!i565[1]
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i567 = data
  i566.name = i567[0]
  i566.width = i567[1]
  i566.height = i567[2]
  i566.mipmapCount = i567[3]
  i566.anisoLevel = i567[4]
  i566.filterMode = i567[5]
  i566.hdr = !!i567[6]
  i566.format = i567[7]
  i566.wrapMode = i567[8]
  i566.alphaIsTransparency = !!i567[9]
  i566.alphaSource = i567[10]
  i566.graphicsFormat = i567[11]
  i566.sRGBTexture = !!i567[12]
  i566.desiredColorSpace = i567[13]
  i566.wrapU = i567[14]
  i566.wrapV = i567[15]
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i569 = data
  i568.position = new pc.Vec3( i569[0], i569[1], i569[2] )
  i568.scale = new pc.Vec3( i569[3], i569[4], i569[5] )
  i568.rotation = new pc.Quat(i569[6], i569[7], i569[8], i569[9])
  return i568
}

Deserializers["AudioBase"] = function (request, data, root) {
  var i570 = root || request.c( 'AudioBase' )
  var i571 = data
  request.r(i571[0], i571[1], 0, i570, 'audioSource')
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i573 = data
  request.r(i573[0], i573[1], 0, i572, 'clip')
  request.r(i573[2], i573[3], 0, i572, 'outputAudioMixerGroup')
  i572.playOnAwake = !!i573[4]
  i572.loop = !!i573[5]
  i572.time = i573[6]
  i572.volume = i573[7]
  i572.pitch = i573[8]
  i572.enabled = !!i573[9]
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i575 = data
  i574.name = i575[0]
  i574.tagId = i575[1]
  i574.enabled = !!i575[2]
  i574.isStatic = !!i575[3]
  i574.layer = i575[4]
  return i574
}

Deserializers["Pin"] = function (request, data, root) {
  var i576 = root || request.c( 'Pin' )
  var i577 = data
  i576.speed = i577[0]
  i576.distance = i577[1]
  request.r(i577[2], i577[3], 0, i576, 'audioBase')
  i576.soundMove = request.d('Sound', i577[4], i576.soundMove)
  return i576
}

Deserializers["Sound"] = function (request, data, root) {
  var i578 = root || request.c( 'Sound' )
  var i579 = data
  request.r(i579[0], i579[1], 0, i578, 'clip')
  i578.volume = i579[2]
  i578.isLoop = !!i579[3]
  i578.delay = i579[4]
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i581 = data
  i580.bodyType = i581[0]
  request.r(i581[1], i581[2], 0, i580, 'material')
  i580.simulated = !!i581[3]
  i580.useAutoMass = !!i581[4]
  i580.mass = i581[5]
  i580.drag = i581[6]
  i580.angularDrag = i581[7]
  i580.gravityScale = i581[8]
  i580.collisionDetectionMode = i581[9]
  i580.sleepMode = i581[10]
  i580.constraints = i581[11]
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i583 = data
  i582.enabled = !!i583[0]
  request.r(i583[1], i583[2], 0, i582, 'sharedMaterial')
  var i585 = i583[3]
  var i584 = []
  for(var i = 0; i < i585.length; i += 2) {
  request.r(i585[i + 0], i585[i + 1], 2, i584, '')
  }
  i582.sharedMaterials = i584
  i582.receiveShadows = !!i583[4]
  i582.shadowCastingMode = i583[5]
  i582.sortingLayerID = i583[6]
  i582.sortingOrder = i583[7]
  i582.lightmapIndex = i583[8]
  i582.lightmapSceneIndex = i583[9]
  i582.lightmapScaleOffset = new pc.Vec4( i583[10], i583[11], i583[12], i583[13] )
  i582.lightProbeUsage = i583[14]
  i582.reflectionProbeUsage = i583[15]
  i582.color = new pc.Color(i583[16], i583[17], i583[18], i583[19])
  request.r(i583[20], i583[21], 0, i582, 'sprite')
  i582.flipX = !!i583[22]
  i582.flipY = !!i583[23]
  i582.drawMode = i583[24]
  i582.size = new pc.Vec2( i583[25], i583[26] )
  i582.tileMode = i583[27]
  i582.adaptiveModeThreshold = i583[28]
  i582.maskInteraction = i583[29]
  i582.spriteSortPoint = i583[30]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i589 = data
  i588.usedByComposite = !!i589[0]
  i588.autoTiling = !!i589[1]
  i588.size = new pc.Vec2( i589[2], i589[3] )
  i588.edgeRadius = i589[4]
  i588.enabled = !!i589[5]
  i588.isTrigger = !!i589[6]
  i588.usedByEffector = !!i589[7]
  i588.density = i589[8]
  i588.offset = new pc.Vec2( i589[9], i589[10] )
  request.r(i589[11], i589[12], 0, i588, 'material')
  return i588
}

Deserializers["ObjectSpawn"] = function (request, data, root) {
  var i590 = root || request.c( 'ObjectSpawn' )
  var i591 = data
  request.r(i591[0], i591[1], 0, i590, 'rig')
  i590.force = i591[2]
  i590.posYToDestroy = i591[3]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i593 = data
  i592.radius = i593[0]
  i592.enabled = !!i593[1]
  i592.isTrigger = !!i593[2]
  i592.usedByEffector = !!i593[3]
  i592.density = i593[4]
  i592.offset = new pc.Vec2( i593[5], i593[6] )
  request.r(i593[7], i593[8], 0, i592, 'material')
  return i592
}

Deserializers["Point"] = function (request, data, root) {
  var i594 = root || request.c( 'Point' )
  var i595 = data
  i594.cameraCenterX = i595[0]
  i594.cameraCenterY = i595[1]
  i594.starAnimation = request.d('AnimationBase', i595[2], i594.starAnimation)
  i594.endAnimation = request.d('AnimationBase', i595[3], i594.endAnimation)
  i594.isFlipX = !!i595[4]
  return i594
}

Deserializers["AnimationBase"] = function (request, data, root) {
  var i596 = root || request.c( 'AnimationBase' )
  var i597 = data
  i596.animationName = i597[0]
  i596.sound = request.d('Sound', i597[1], i596.sound)
  i596.isLoop = !!i597[2]
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i599 = data
  i598.name = i599[0]
  i598.halfPrecision = !!i599[1]
  i598.useUInt32IndexFormat = !!i599[2]
  i598.vertexCount = i599[3]
  i598.aabb = i599[4]
  var i601 = i599[5]
  var i600 = []
  for(var i = 0; i < i601.length; i += 1) {
    i600.push( !!i601[i + 0] );
  }
  i598.streams = i600
  i598.vertices = i599[6]
  var i603 = i599[7]
  var i602 = []
  for(var i = 0; i < i603.length; i += 1) {
    i602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i603[i + 0]) );
  }
  i598.subMeshes = i602
  var i605 = i599[8]
  var i604 = []
  for(var i = 0; i < i605.length; i += 16) {
    i604.push( new pc.Mat4().setData(i605[i + 0], i605[i + 1], i605[i + 2], i605[i + 3],  i605[i + 4], i605[i + 5], i605[i + 6], i605[i + 7],  i605[i + 8], i605[i + 9], i605[i + 10], i605[i + 11],  i605[i + 12], i605[i + 13], i605[i + 14], i605[i + 15]) );
  }
  i598.bindposes = i604
  var i607 = i599[9]
  var i606 = []
  for(var i = 0; i < i607.length; i += 1) {
    i606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i607[i + 0]) );
  }
  i598.blendShapes = i606
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i613 = data
  i612.triangles = i613[0]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i619 = data
  i618.name = i619[0]
  var i621 = i619[1]
  var i620 = []
  for(var i = 0; i < i621.length; i += 1) {
    i620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i621[i + 0]) );
  }
  i618.frames = i620
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i623 = data
  i622.pivot = new pc.Vec2( i623[0], i623[1] )
  i622.anchorMin = new pc.Vec2( i623[2], i623[3] )
  i622.anchorMax = new pc.Vec2( i623[4], i623[5] )
  i622.sizeDelta = new pc.Vec2( i623[6], i623[7] )
  i622.anchoredPosition3D = new pc.Vec3( i623[8], i623[9], i623[10] )
  i622.rotation = new pc.Quat(i623[11], i623[12], i623[13], i623[14])
  i622.scale = new pc.Vec3( i623[15], i623[16], i623[17] )
  return i622
}

Deserializers["PopupWin"] = function (request, data, root) {
  var i624 = root || request.c( 'PopupWin' )
  var i625 = data
  request.r(i625[0], i625[1], 0, i624, 'content')
  request.r(i625[2], i625[3], 0, i624, 'animator')
  i624.animShowName = i625[4]
  request.r(i625[5], i625[6], 0, i624, 'audioBase')
  i624.soundOpen = request.d('Sound', i625[7], i624.soundOpen)
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i627 = data
  request.r(i627[0], i627[1], 0, i626, 'animatorController')
  request.r(i627[2], i627[3], 0, i626, 'avatar')
  i626.updateMode = i627[4]
  i626.hasTransformHierarchy = !!i627[5]
  i626.applyRootMotion = !!i627[6]
  var i629 = i627[7]
  var i628 = []
  for(var i = 0; i < i629.length; i += 2) {
  request.r(i629[i + 0], i629[i + 1], 2, i628, '')
  }
  i626.humanBones = i628
  i626.enabled = !!i627[8]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i633 = data
  i632.cullTransparentMesh = !!i633[0]
  return i632
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.UI.Image' )
  var i635 = data
  request.r(i635[0], i635[1], 0, i634, 'm_Sprite')
  i634.m_Type = i635[2]
  i634.m_PreserveAspect = !!i635[3]
  i634.m_FillCenter = !!i635[4]
  i634.m_FillMethod = i635[5]
  i634.m_FillAmount = i635[6]
  i634.m_FillClockwise = !!i635[7]
  i634.m_FillOrigin = i635[8]
  i634.m_UseSpriteMesh = !!i635[9]
  i634.m_PixelsPerUnitMultiplier = i635[10]
  request.r(i635[11], i635[12], 0, i634, 'm_Material')
  i634.m_Maskable = !!i635[13]
  i634.m_Color = new pc.Color(i635[14], i635[15], i635[16], i635[17])
  i634.m_RaycastTarget = !!i635[18]
  i634.m_RaycastPadding = new pc.Vec4( i635[19], i635[20], i635[21], i635[22] )
  return i634
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.UI.Button' )
  var i637 = data
  i636.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i637[0], i636.m_OnClick)
  i636.m_Navigation = request.d('UnityEngine.UI.Navigation', i637[1], i636.m_Navigation)
  i636.m_Transition = i637[2]
  i636.m_Colors = request.d('UnityEngine.UI.ColorBlock', i637[3], i636.m_Colors)
  i636.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i637[4], i636.m_SpriteState)
  i636.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i637[5], i636.m_AnimationTriggers)
  i636.m_Interactable = !!i637[6]
  request.r(i637[7], i637[8], 0, i636, 'm_TargetGraphic')
  return i636
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i638 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i639 = data
  i638.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i639[0], i638.m_PersistentCalls)
  return i638
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i640 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i641 = data
  var i643 = i641[0]
  var i642 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i643.length; i += 1) {
    i642.add(request.d('UnityEngine.Events.PersistentCall', i643[i + 0]));
  }
  i640.m_Calls = i642
  return i640
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i647 = data
  request.r(i647[0], i647[1], 0, i646, 'm_Target')
  i646.m_TargetAssemblyTypeName = i647[2]
  i646.m_MethodName = i647[3]
  i646.m_Mode = i647[4]
  i646.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i647[5], i646.m_Arguments)
  i646.m_CallState = i647[6]
  return i646
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i649 = data
  i648.m_Mode = i649[0]
  i648.m_WrapAround = !!i649[1]
  request.r(i649[2], i649[3], 0, i648, 'm_SelectOnUp')
  request.r(i649[4], i649[5], 0, i648, 'm_SelectOnDown')
  request.r(i649[6], i649[7], 0, i648, 'm_SelectOnLeft')
  request.r(i649[8], i649[9], 0, i648, 'm_SelectOnRight')
  return i648
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i651 = data
  i650.m_NormalColor = new pc.Color(i651[0], i651[1], i651[2], i651[3])
  i650.m_HighlightedColor = new pc.Color(i651[4], i651[5], i651[6], i651[7])
  i650.m_PressedColor = new pc.Color(i651[8], i651[9], i651[10], i651[11])
  i650.m_SelectedColor = new pc.Color(i651[12], i651[13], i651[14], i651[15])
  i650.m_DisabledColor = new pc.Color(i651[16], i651[17], i651[18], i651[19])
  i650.m_ColorMultiplier = i651[20]
  i650.m_FadeDuration = i651[21]
  return i650
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i653 = data
  request.r(i653[0], i653[1], 0, i652, 'm_HighlightedSprite')
  request.r(i653[2], i653[3], 0, i652, 'm_PressedSprite')
  request.r(i653[4], i653[5], 0, i652, 'm_SelectedSprite')
  request.r(i653[6], i653[7], 0, i652, 'm_DisabledSprite')
  return i652
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i655 = data
  i654.m_NormalTrigger = i655[0]
  i654.m_HighlightedTrigger = i655[1]
  i654.m_PressedTrigger = i655[2]
  i654.m_SelectedTrigger = i655[3]
  i654.m_DisabledTrigger = i655[4]
  return i654
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.UI.Text' )
  var i657 = data
  i656.m_FontData = request.d('UnityEngine.UI.FontData', i657[0], i656.m_FontData)
  i656.m_Text = i657[1]
  request.r(i657[2], i657[3], 0, i656, 'm_Material')
  i656.m_Maskable = !!i657[4]
  i656.m_Color = new pc.Color(i657[5], i657[6], i657[7], i657[8])
  i656.m_RaycastTarget = !!i657[9]
  i656.m_RaycastPadding = new pc.Vec4( i657[10], i657[11], i657[12], i657[13] )
  return i656
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.UI.FontData' )
  var i659 = data
  request.r(i659[0], i659[1], 0, i658, 'm_Font')
  i658.m_FontSize = i659[2]
  i658.m_FontStyle = i659[3]
  i658.m_BestFit = !!i659[4]
  i658.m_MinSize = i659[5]
  i658.m_MaxSize = i659[6]
  i658.m_Alignment = i659[7]
  i658.m_AlignByGeometry = !!i659[8]
  i658.m_RichText = !!i659[9]
  i658.m_HorizontalOverflow = i659[10]
  i658.m_VerticalOverflow = i659[11]
  i658.m_LineSpacing = i659[12]
  return i658
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i661 = data
  request.r(i661[0], i661[1], 0, i660, 'm_ObjectArgument')
  i660.m_ObjectArgumentAssemblyTypeName = i661[2]
  i660.m_IntArgument = i661[3]
  i660.m_FloatArgument = i661[4]
  i660.m_StringArgument = i661[5]
  i660.m_BoolArgument = !!i661[6]
  return i660
}

Deserializers["ButtonCTA"] = function (request, data, root) {
  var i662 = root || request.c( 'ButtonCTA' )
  var i663 = data
  i662.urlAndroid = i663[0]
  i662.urlIos = i663[1]
  return i662
}

Deserializers["PopupLose"] = function (request, data, root) {
  var i664 = root || request.c( 'PopupLose' )
  var i665 = data
  request.r(i665[0], i665[1], 0, i664, 'content')
  request.r(i665[2], i665[3], 0, i664, 'animator')
  i664.animShowName = i665[4]
  request.r(i665[5], i665[6], 0, i664, 'audioBase')
  i664.soundOpen = request.d('Sound', i665[7], i664.soundOpen)
  return i664
}

Deserializers["Gamee.Hiuk.Game.Input.TouchManager"] = function (request, data, root) {
  var i666 = root || request.c( 'Gamee.Hiuk.Game.Input.TouchManager' )
  var i667 = data
  request.r(i667[0], i667[1], 0, i666, 'cam')
  request.r(i667[2], i667[3], 0, i666, 'trailPrefab')
  i666.layerInput = UnityEngine.LayerMask.FromIntegerValue( i667[4] )
  i666.distane = i667[5]
  i666.isMultiTouch = !!i667[6]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i669 = data
  i668.name = i669[0]
  i668.index = i669[1]
  i668.startup = !!i669[2]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i671 = data
  i670.enabled = !!i671[0]
  i670.aspect = i671[1]
  i670.orthographic = !!i671[2]
  i670.orthographicSize = i671[3]
  i670.backgroundColor = new pc.Color(i671[4], i671[5], i671[6], i671[7])
  i670.nearClipPlane = i671[8]
  i670.farClipPlane = i671[9]
  i670.fieldOfView = i671[10]
  i670.depth = i671[11]
  i670.clearFlags = i671[12]
  i670.cullingMask = i671[13]
  i670.rect = i671[14]
  request.r(i671[15], i671[16], 0, i670, 'targetTexture')
  i670.usePhysicalProperties = !!i671[17]
  i670.focalLength = i671[18]
  i670.sensorSize = new pc.Vec2( i671[19], i671[20] )
  i670.lensShift = new pc.Vec2( i671[21], i671[22] )
  i670.gateFit = i671[23]
  i670.commandBufferCount = i671[24]
  i670.cameraType = i671[25]
  return i670
}

Deserializers["GameManager_23_06_25"] = function (request, data, root) {
  var i672 = root || request.c( 'GameManager_23_06_25' )
  var i673 = data
  request.r(i673[0], i673[1], 0, i672, 'canvasUI')
  request.r(i673[2], i673[3], 0, i672, 'levelBase')
  return i672
}

Deserializers["ScreenScale"] = function (request, data, root) {
  var i674 = root || request.c( 'ScreenScale' )
  var i675 = data
  i674.screenSizeOrigin = new pc.Vec2( i675[0], i675[1] )
  request.r(i675[2], i675[3], 0, i674, 'cameraTarget')
  return i674
}

Deserializers["Level_23_06_25"] = function (request, data, root) {
  var i676 = root || request.c( 'Level_23_06_25' )
  var i677 = data
  request.r(i677[0], i677[1], 0, i676, 'king')
  request.r(i677[2], i677[3], 0, i676, 'pointStart')
  var i679 = i677[4]
  var i678 = new (System.Collections.Generic.List$1(Bridge.ns('Pin')))
  for(var i = 0; i < i679.length; i += 2) {
  request.r(i679[i + 0], i679[i + 1], 1, i678, '')
  }
  i676.listPinMove = i678
  var i681 = i677[5]
  var i680 = new (System.Collections.Generic.List$1(Bridge.ns('Point')))
  for(var i = 0; i < i681.length; i += 2) {
  request.r(i681[i + 0], i681[i + 1], 1, i680, '')
  }
  i676.listPoint = i680
  request.r(i677[6], i677[7], 0, i676, 'cameraConfig')
  i676.timeTutorial = i677[8]
  i676.timeUp = i677[9]
  i676.timePlayMax = i677[10]
  request.r(i677[11], i677[12], 0, i676, 'container')
  request.r(i677[13], i677[14], 0, i676, 'spawn')
  request.r(i677[15], i677[16], 0, i676, 'warring')
  request.r(i677[17], i677[18], 0, i676, 'hand')
  request.r(i677[19], i677[20], 0, i676, 'pointEnd')
  request.r(i677[21], i677[22], 0, i676, 'audioBG')
  i676.soundBG = request.d('Sound', i677[23], i676.soundBG)
  request.r(i677[24], i677[25], 0, i676, 'audioFx')
  return i676
}

Deserializers["Spawn"] = function (request, data, root) {
  var i686 = root || request.c( 'Spawn' )
  var i687 = data
  request.r(i687[0], i687[1], 0, i686, 'root')
  var i689 = i687[2]
  var i688 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i689.length; i += 2) {
  request.r(i689[i + 0], i689[i + 1], 1, i688, '')
  }
  i686.listObject = i688
  i686.countCreateOnStart = i687[3]
  i686.countCreateMax = i687[4]
  i686.randMin = i687[5]
  i686.randMax = i687[6]
  i686.timeCreate = i687[7]
  request.r(i687[8], i687[9], 0, i686, 'audioBase')
  i686.soundStart = request.d('Sound', i687[10], i686.soundStart)
  return i686
}

Deserializers["Container"] = function (request, data, root) {
  var i692 = root || request.c( 'Container' )
  var i693 = data
  request.r(i693[0], i693[1], 0, i692, 'audioBase')
  i692.soundDrop = request.d('Sound', i693[2], i692.soundDrop)
  request.r(i693[3], i693[4], 0, i692, 'box')
  i692.layer = UnityEngine.LayerMask.FromIntegerValue( i693[5] )
  i692.countMax = i693[6]
  request.r(i693[7], i693[8], 0, i692, 'spawn1')
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i695 = data
  request.r(i695[0], i695[1], 0, i694, 'sharedMesh')
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i697 = data
  request.r(i697[0], i697[1], 0, i696, 'additionalVertexStreams')
  i696.enabled = !!i697[2]
  request.r(i697[3], i697[4], 0, i696, 'sharedMaterial')
  var i699 = i697[5]
  var i698 = []
  for(var i = 0; i < i699.length; i += 2) {
  request.r(i699[i + 0], i699[i + 1], 2, i698, '')
  }
  i696.sharedMaterials = i698
  i696.receiveShadows = !!i697[6]
  i696.shadowCastingMode = i697[7]
  i696.sortingLayerID = i697[8]
  i696.sortingOrder = i697[9]
  i696.lightmapIndex = i697[10]
  i696.lightmapSceneIndex = i697[11]
  i696.lightmapScaleOffset = new pc.Vec4( i697[12], i697[13], i697[14], i697[15] )
  i696.lightProbeUsage = i697[16]
  i696.reflectionProbeUsage = i697[17]
  return i696
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i700 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i701 = data
  i700.loop = !!i701[0]
  i700.timeScale = i701[1]
  request.r(i701[2], i701[3], 0, i700, 'skeletonDataAsset')
  i700.initialSkinName = i701[4]
  i700.fixPrefabOverrideViaMeshFilter = i701[5]
  i700.initialFlipX = !!i701[6]
  i700.initialFlipY = !!i701[7]
  i700.updateWhenInvisible = i701[8]
  i700.zSpacing = i701[9]
  i700.useClipping = !!i701[10]
  i700.immutableTriangles = !!i701[11]
  i700.pmaVertexColors = !!i701[12]
  i700.clearStateOnDisable = !!i701[13]
  i700.tintBlack = !!i701[14]
  i700.singleSubmesh = !!i701[15]
  i700.fixDrawOrder = !!i701[16]
  i700.addNormals = !!i701[17]
  i700.calculateTangents = !!i701[18]
  i700.maskInteraction = i701[19]
  i700.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i701[20], i700.maskMaterials)
  i700.disableRenderingOnOverride = !!i701[21]
  i700.updateTiming = i701[22]
  i700.unscaledTime = !!i701[23]
  i700._animationName = i701[24]
  var i703 = i701[25]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( i703[i + 0] );
  }
  i700.separatorSlotNames = i702
  return i700
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i704 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i705 = data
  var i707 = i705[0]
  var i706 = []
  for(var i = 0; i < i707.length; i += 2) {
  request.r(i707[i + 0], i707[i + 1], 2, i706, '')
  }
  i704.materialsMaskDisabled = i706
  var i709 = i705[1]
  var i708 = []
  for(var i = 0; i < i709.length; i += 2) {
  request.r(i709[i + 0], i709[i + 1], 2, i708, '')
  }
  i704.materialsInsideMask = i708
  var i711 = i705[2]
  var i710 = []
  for(var i = 0; i < i711.length; i += 2) {
  request.r(i711[i + 0], i711[i + 1], 2, i710, '')
  }
  i704.materialsOutsideMask = i710
  return i704
}

Deserializers["Scale"] = function (request, data, root) {
  var i714 = root || request.c( 'Scale' )
  var i715 = data
  i714.isAuto = !!i715[0]
  i714.scale = i715[1]
  i714.ease = i715[2]
  return i714
}

Deserializers["King"] = function (request, data, root) {
  var i716 = root || request.c( 'King' )
  var i717 = data
  i716.speed = i717[0]
  i716.easeMove = i717[1]
  request.r(i717[2], i717[3], 0, i716, 'box')
  i716.animIdle = request.d('AnimationBase', i717[4], i716.animIdle)
  var i719 = i717[5]
  var i718 = new (System.Collections.Generic.List$1(Bridge.ns('AnimationBase')))
  for(var i = 0; i < i719.length; i += 1) {
    i718.add(request.d('AnimationBase', i719[i + 0]));
  }
  i716.listAnimation = i718
  request.r(i717[6], i717[7], 0, i716, 'smoke')
  request.r(i717[8], i717[9], 0, i716, 'animator')
  request.r(i717[10], i717[11], 0, i716, 'audioBase')
  request.r(i717[12], i717[13], 0, i716, 'center')
  return i716
}

Deserializers["AnimatorSkeleton"] = function (request, data, root) {
  var i722 = root || request.c( 'AnimatorSkeleton' )
  var i723 = data
  request.r(i723[0], i723[1], 0, i722, 'skeletonAnimation')
  return i722
}

Deserializers["Gamee.Hiuk.Pattern.PoolManager"] = function (request, data, root) {
  var i724 = root || request.c( 'Gamee.Hiuk.Pattern.PoolManager' )
  var i725 = data
  i724.logStatus = !!i725[0]
  request.r(i725[1], i725[2], 0, i724, 'root')
  i724.dontDestroy = !!i725[3]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i727 = data
  i726.enabled = !!i727[0]
  i726.planeDistance = i727[1]
  i726.referencePixelsPerUnit = i727[2]
  i726.isFallbackOverlay = !!i727[3]
  i726.renderMode = i727[4]
  i726.renderOrder = i727[5]
  i726.sortingLayerName = i727[6]
  i726.sortingOrder = i727[7]
  i726.scaleFactor = i727[8]
  request.r(i727[9], i727[10], 0, i726, 'worldCamera')
  i726.overrideSorting = !!i727[11]
  i726.pixelPerfect = !!i727[12]
  i726.targetDisplay = i727[13]
  i726.overridePixelPerfect = !!i727[14]
  return i726
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i729 = data
  i728.m_UiScaleMode = i729[0]
  i728.m_ReferencePixelsPerUnit = i729[1]
  i728.m_ScaleFactor = i729[2]
  i728.m_ReferenceResolution = new pc.Vec2( i729[3], i729[4] )
  i728.m_ScreenMatchMode = i729[5]
  i728.m_MatchWidthOrHeight = i729[6]
  i728.m_PhysicalUnit = i729[7]
  i728.m_FallbackScreenDPI = i729[8]
  i728.m_DefaultSpriteDPI = i729[9]
  i728.m_DynamicPixelsPerUnit = i729[10]
  i728.m_PresetInfoIsWorld = !!i729[11]
  return i728
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i731 = data
  i730.m_IgnoreReversedGraphics = !!i731[0]
  i730.m_BlockingObjects = i731[1]
  i730.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i731[2] )
  return i730
}

Deserializers["CanvasUI"] = function (request, data, root) {
  var i732 = root || request.c( 'CanvasUI' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'popupWin')
  request.r(i733[2], i733[3], 0, i732, 'popupLose')
  return i732
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i734 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i735 = data
  request.r(i735[0], i735[1], 0, i734, 'skeletonDataAsset')
  request.r(i735[2], i735[3], 0, i734, 'additiveMaterial')
  request.r(i735[4], i735[5], 0, i734, 'multiplyMaterial')
  request.r(i735[6], i735[7], 0, i734, 'screenMaterial')
  i734.initialSkinName = i735[8]
  i734.initialFlipX = !!i735[9]
  i734.initialFlipY = !!i735[10]
  i734.startingAnimation = i735[11]
  i734.startingLoop = !!i735[12]
  i734.timeScale = i735[13]
  i734.freeze = !!i735[14]
  i734.layoutScaleMode = i735[15]
  i734.updateWhenInvisible = i735[16]
  i734.allowMultipleCanvasRenderers = !!i735[17]
  var i737 = i735[18]
  var i736 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i737.length; i += 2) {
  request.r(i737[i + 0], i737[i + 1], 1, i736, '')
  }
  i734.canvasRenderers = i736
  i734.enableSeparatorSlots = !!i735[19]
  i734.updateSeparatorPartLocation = !!i735[20]
  i734.updateSeparatorPartScale = !!i735[21]
  i734.disableMeshAssignmentOnOverride = !!i735[22]
  i734.referenceSize = new pc.Vec2( i735[23], i735[24] )
  i734.referenceScale = i735[25]
  i734.rectTransformSize = new pc.Vec2( i735[26], i735[27] )
  i734.editReferenceRect = !!i735[28]
  var i739 = i735[29]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( i739[i + 0] );
  }
  i734.separatorSlotNames = i738
  var i741 = i735[30]
  var i740 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i741.length; i += 2) {
  request.r(i741[i + 0], i741[i + 1], 1, i740, '')
  }
  i734.separatorParts = i740
  i734.meshGenerator = request.d('Spine.Unity.MeshGenerator', i735[31], i734.meshGenerator)
  i734.updateTiming = i735[32]
  i734.unscaledTime = !!i735[33]
  request.r(i735[34], i735[35], 0, i734, 'm_Material')
  i734.m_Maskable = !!i735[36]
  i734.m_Color = new pc.Color(i735[37], i735[38], i735[39], i735[40])
  i734.m_RaycastTarget = !!i735[41]
  i734.m_RaycastPadding = new pc.Vec4( i735[42], i735[43], i735[44], i735[45] )
  return i734
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i746 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i747 = data
  i746.settings = request.d('Spine.Unity.MeshGenerator+Settings', i747[0], i746.settings)
  return i746
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i748 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i749 = data
  i748.useClipping = !!i749[0]
  i748.zSpacing = i749[1]
  i748.pmaVertexColors = !!i749[2]
  i748.tintBlack = !!i749[3]
  i748.canvasGroupTintBlack = !!i749[4]
  i748.calculateTangents = !!i749[5]
  i748.addNormals = !!i749[6]
  i748.immutableTriangles = !!i749[7]
  return i748
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i751 = data
  request.r(i751[0], i751[1], 0, i750, 'm_FirstSelected')
  i750.m_sendNavigationEvents = !!i751[2]
  i750.m_DragThreshold = i751[3]
  return i750
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i753 = data
  i752.m_HorizontalAxis = i753[0]
  i752.m_VerticalAxis = i753[1]
  i752.m_SubmitButton = i753[2]
  i752.m_CancelButton = i753[3]
  i752.m_InputActionsPerSecond = i753[4]
  i752.m_RepeatDelay = i753[5]
  i752.m_ForceModuleActive = !!i753[6]
  i752.m_SendPointerHoverToParent = !!i753[7]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i755 = data
  i754.ambientIntensity = i755[0]
  i754.reflectionIntensity = i755[1]
  i754.ambientMode = i755[2]
  i754.ambientLight = new pc.Color(i755[3], i755[4], i755[5], i755[6])
  i754.ambientSkyColor = new pc.Color(i755[7], i755[8], i755[9], i755[10])
  i754.ambientGroundColor = new pc.Color(i755[11], i755[12], i755[13], i755[14])
  i754.ambientEquatorColor = new pc.Color(i755[15], i755[16], i755[17], i755[18])
  i754.fogColor = new pc.Color(i755[19], i755[20], i755[21], i755[22])
  i754.fogEndDistance = i755[23]
  i754.fogStartDistance = i755[24]
  i754.fogDensity = i755[25]
  i754.fog = !!i755[26]
  request.r(i755[27], i755[28], 0, i754, 'skybox')
  i754.fogMode = i755[29]
  var i757 = i755[30]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i757[i + 0]) );
  }
  i754.lightmaps = i756
  i754.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i755[31], i754.lightProbes)
  i754.lightmapsMode = i755[32]
  i754.mixedBakeMode = i755[33]
  i754.environmentLightingMode = i755[34]
  i754.ambientProbe = new pc.SphericalHarmonicsL2(i755[35])
  i754.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i755[36])
  i754.useReferenceAmbientProbe = !!i755[37]
  request.r(i755[38], i755[39], 0, i754, 'customReflection')
  request.r(i755[40], i755[41], 0, i754, 'defaultReflection')
  i754.defaultReflectionMode = i755[42]
  i754.defaultReflectionResolution = i755[43]
  i754.sunLightObjectId = i755[44]
  i754.pixelLightCount = i755[45]
  i754.defaultReflectionHDR = !!i755[46]
  i754.hasLightDataAsset = !!i755[47]
  i754.hasManualGenerate = !!i755[48]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i761 = data
  request.r(i761[0], i761[1], 0, i760, 'lightmapColor')
  request.r(i761[2], i761[3], 0, i760, 'lightmapDirection')
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i762 = root || new UnityEngine.LightProbes()
  var i763 = data
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i771 = data
  i770.name = i771[0]
  i770.bounciness = i771[1]
  i770.friction = i771[2]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i773 = data
  var i775 = i773[0]
  var i774 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i775.length; i += 1) {
    i774.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i775[i + 0]));
  }
  i772.ShaderCompilationErrors = i774
  i772.name = i773[1]
  i772.guid = i773[2]
  var i777 = i773[3]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( i777[i + 0] );
  }
  i772.shaderDefinedKeywords = i776
  var i779 = i773[4]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i779[i + 0]) );
  }
  i772.passes = i778
  var i781 = i773[5]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i781[i + 0]) );
  }
  i772.usePasses = i780
  var i783 = i773[6]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i783[i + 0]) );
  }
  i772.defaultParameterValues = i782
  request.r(i773[7], i773[8], 0, i772, 'unityFallbackShader')
  i772.readDepth = !!i773[9]
  i772.isCreatedByShaderGraph = !!i773[10]
  i772.compiled = !!i773[11]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i787 = data
  i786.shaderName = i787[0]
  i786.errorMessage = i787[1]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i790 = root || new pc.UnityShaderPass()
  var i791 = data
  i790.id = i791[0]
  i790.subShaderIndex = i791[1]
  i790.name = i791[2]
  i790.passType = i791[3]
  i790.grabPassTextureName = i791[4]
  i790.usePass = !!i791[5]
  i790.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[6], i790.zTest)
  i790.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[7], i790.zWrite)
  i790.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[8], i790.culling)
  i790.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i791[9], i790.blending)
  i790.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i791[10], i790.alphaBlending)
  i790.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[11], i790.colorWriteMask)
  i790.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[12], i790.offsetUnits)
  i790.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[13], i790.offsetFactor)
  i790.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[14], i790.stencilRef)
  i790.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[15], i790.stencilReadMask)
  i790.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[16], i790.stencilWriteMask)
  i790.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i791[17], i790.stencilOp)
  i790.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i791[18], i790.stencilOpFront)
  i790.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i791[19], i790.stencilOpBack)
  var i793 = i791[20]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i793[i + 0]) );
  }
  i790.tags = i792
  var i795 = i791[21]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( i795[i + 0] );
  }
  i790.passDefinedKeywords = i794
  var i797 = i791[22]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i797[i + 0]) );
  }
  i790.passDefinedKeywordGroups = i796
  var i799 = i791[23]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i799[i + 0]) );
  }
  i790.variants = i798
  var i801 = i791[24]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i801[i + 0]) );
  }
  i790.excludedVariants = i800
  i790.hasDepthReader = !!i791[25]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i803 = data
  i802.val = i803[0]
  i802.name = i803[1]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i805 = data
  i804.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i805[0], i804.src)
  i804.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i805[1], i804.dst)
  i804.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i805[2], i804.op)
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i807 = data
  i806.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i807[0], i806.pass)
  i806.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i807[1], i806.fail)
  i806.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i807[2], i806.zFail)
  i806.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i807[3], i806.comp)
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i811 = data
  i810.name = i811[0]
  i810.value = i811[1]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i815 = data
  var i817 = i815[0]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( i817[i + 0] );
  }
  i814.keywords = i816
  i814.hasDiscard = !!i815[1]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i821 = data
  i820.passId = i821[0]
  i820.subShaderIndex = i821[1]
  var i823 = i821[2]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( i823[i + 0] );
  }
  i820.keywords = i822
  i820.vertexProgram = i821[3]
  i820.fragmentProgram = i821[4]
  i820.exportedForWebGl2 = !!i821[5]
  i820.readDepth = !!i821[6]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i827 = data
  request.r(i827[0], i827[1], 0, i826, 'shader')
  i826.pass = i827[2]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i831 = data
  i830.name = i831[0]
  i830.type = i831[1]
  i830.value = new pc.Vec4( i831[2], i831[3], i831[4], i831[5] )
  i830.textureValue = i831[6]
  i830.shaderPropertyFlag = i831[7]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i833 = data
  i832.name = i833[0]
  request.r(i833[1], i833[2], 0, i832, 'texture')
  i832.aabb = i833[3]
  i832.vertices = i833[4]
  i832.triangles = i833[5]
  i832.textureRect = UnityEngine.Rect.MinMaxRect(i833[6], i833[7], i833[8], i833[9])
  i832.packedRect = UnityEngine.Rect.MinMaxRect(i833[10], i833[11], i833[12], i833[13])
  i832.border = new pc.Vec4( i833[14], i833[15], i833[16], i833[17] )
  i832.transparency = i833[18]
  i832.bounds = i833[19]
  i832.pixelsPerUnit = i833[20]
  i832.textureWidth = i833[21]
  i832.textureHeight = i833[22]
  i832.nativeSize = new pc.Vec2( i833[23], i833[24] )
  i832.pivot = new pc.Vec2( i833[25], i833[26] )
  i832.textureRectOffset = new pc.Vec2( i833[27], i833[28] )
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i835 = data
  i834.name = i835[0]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i837 = data
  i836.name = i837[0]
  i836.wrapMode = i837[1]
  i836.isLooping = !!i837[2]
  i836.length = i837[3]
  var i839 = i837[4]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i839[i + 0]) );
  }
  i836.curves = i838
  var i841 = i837[5]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i841[i + 0]) );
  }
  i836.events = i840
  i836.halfPrecision = !!i837[6]
  i836._frameRate = i837[7]
  i836.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i837[8], i836.localBounds)
  i836.hasMuscleCurves = !!i837[9]
  var i843 = i837[10]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( i843[i + 0] );
  }
  i836.clipMuscleConstant = i842
  i836.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i837[11], i836.clipBindingConstant)
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i847 = data
  i846.path = i847[0]
  i846.hash = i847[1]
  i846.componentType = i847[2]
  i846.property = i847[3]
  i846.keys = i847[4]
  var i849 = i847[5]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i849[i + 0]) );
  }
  i846.objectReferenceKeys = i848
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i853 = data
  i852.time = i853[0]
  request.r(i853[1], i853[2], 0, i852, 'value')
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i857 = data
  i856.functionName = i857[0]
  i856.floatParameter = i857[1]
  i856.intParameter = i857[2]
  i856.stringParameter = i857[3]
  request.r(i857[4], i857[5], 0, i856, 'objectReferenceParameter')
  i856.time = i857[6]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i859 = data
  i858.center = new pc.Vec3( i859[0], i859[1], i859[2] )
  i858.extends = new pc.Vec3( i859[3], i859[4], i859[5] )
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i863 = data
  var i865 = i863[0]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( i865[i + 0] );
  }
  i862.genericBindings = i864
  var i867 = i863[1]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( i867[i + 0] );
  }
  i862.pptrCurveMapping = i866
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i869 = data
  i868.name = i869[0]
  i868.ascent = i869[1]
  i868.originalLineHeight = i869[2]
  i868.fontSize = i869[3]
  var i871 = i869[4]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i871[i + 0]) );
  }
  i868.characterInfo = i870
  request.r(i869[5], i869[6], 0, i868, 'texture')
  i868.originalFontSize = i869[7]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i875 = data
  i874.index = i875[0]
  i874.advance = i875[1]
  i874.bearing = i875[2]
  i874.glyphWidth = i875[3]
  i874.glyphHeight = i875[4]
  i874.minX = i875[5]
  i874.maxX = i875[6]
  i874.minY = i875[7]
  i874.maxY = i875[8]
  i874.uvBottomLeftX = i875[9]
  i874.uvBottomLeftY = i875[10]
  i874.uvBottomRightX = i875[11]
  i874.uvBottomRightY = i875[12]
  i874.uvTopLeftX = i875[13]
  i874.uvTopLeftY = i875[14]
  i874.uvTopRightX = i875[15]
  i874.uvTopRightY = i875[16]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i877 = data
  i876.name = i877[0]
  var i879 = i877[1]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i879[i + 0]) );
  }
  i876.layers = i878
  var i881 = i877[2]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i881[i + 0]) );
  }
  i876.parameters = i880
  i876.animationClips = i877[3]
  i876.avatarUnsupported = i877[4]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i885 = data
  i884.name = i885[0]
  i884.defaultWeight = i885[1]
  i884.blendingMode = i885[2]
  i884.avatarMask = i885[3]
  i884.syncedLayerIndex = i885[4]
  i884.syncedLayerAffectsTiming = !!i885[5]
  i884.syncedLayers = i885[6]
  i884.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i885[7], i884.stateMachine)
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i887 = data
  i886.id = i887[0]
  i886.name = i887[1]
  i886.path = i887[2]
  var i889 = i887[3]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i889[i + 0]) );
  }
  i886.states = i888
  var i891 = i887[4]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i891[i + 0]) );
  }
  i886.machines = i890
  var i893 = i887[5]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i893[i + 0]) );
  }
  i886.entryStateTransitions = i892
  var i895 = i887[6]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i895[i + 0]) );
  }
  i886.exitStateTransitions = i894
  var i897 = i887[7]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i897[i + 0]) );
  }
  i886.anyStateTransitions = i896
  i886.defaultStateId = i887[8]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i901 = data
  i900.id = i901[0]
  i900.name = i901[1]
  i900.cycleOffset = i901[2]
  i900.cycleOffsetParameter = i901[3]
  i900.cycleOffsetParameterActive = !!i901[4]
  i900.mirror = !!i901[5]
  i900.mirrorParameter = i901[6]
  i900.mirrorParameterActive = !!i901[7]
  i900.motionId = i901[8]
  i900.nameHash = i901[9]
  i900.fullPathHash = i901[10]
  i900.speed = i901[11]
  i900.speedParameter = i901[12]
  i900.speedParameterActive = !!i901[13]
  i900.tag = i901[14]
  i900.tagHash = i901[15]
  i900.writeDefaultValues = !!i901[16]
  var i903 = i901[17]
  var i902 = []
  for(var i = 0; i < i903.length; i += 2) {
  request.r(i903[i + 0], i903[i + 1], 2, i902, '')
  }
  i900.behaviours = i902
  var i905 = i901[18]
  var i904 = []
  for(var i = 0; i < i905.length; i += 1) {
    i904.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i905[i + 0]) );
  }
  i900.transitions = i904
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i911 = data
  i910.fullPath = i911[0]
  i910.canTransitionToSelf = !!i911[1]
  i910.duration = i911[2]
  i910.exitTime = i911[3]
  i910.hasExitTime = !!i911[4]
  i910.hasFixedDuration = !!i911[5]
  i910.interruptionSource = i911[6]
  i910.offset = i911[7]
  i910.orderedInterruption = !!i911[8]
  i910.destinationStateId = i911[9]
  i910.isExit = !!i911[10]
  i910.mute = !!i911[11]
  i910.solo = !!i911[12]
  var i913 = i911[13]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i913[i + 0]) );
  }
  i910.conditions = i912
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i919 = data
  i918.destinationStateId = i919[0]
  i918.isExit = !!i919[1]
  i918.mute = !!i919[2]
  i918.solo = !!i919[3]
  var i921 = i919[4]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i921[i + 0]) );
  }
  i918.conditions = i920
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i925 = data
  i924.defaultBool = !!i925[0]
  i924.defaultFloat = i925[1]
  i924.defaultInt = i925[2]
  i924.name = i925[3]
  i924.nameHash = i925[4]
  i924.type = i925[5]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i929 = data
  i928.mode = i929[0]
  i928.parameter = i929[1]
  i928.threshold = i929[2]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i931 = data
  i930.name = i931[0]
  i930.bytes64 = i931[1]
  i930.data = i931[2]
  return i930
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i932 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i933 = data
  var i935 = i933[0]
  var i934 = []
  for(var i = 0; i < i935.length; i += 2) {
  request.r(i935[i + 0], i935[i + 1], 2, i934, '')
  }
  i932.atlasAssets = i934
  i932.scale = i933[1]
  request.r(i933[2], i933[3], 0, i932, 'skeletonJSON')
  i932.isUpgradingBlendModeMaterials = !!i933[4]
  i932.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i933[5], i932.blendModeMaterials)
  var i937 = i933[6]
  var i936 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i937.length; i += 2) {
  request.r(i937[i + 0], i937[i + 1], 1, i936, '')
  }
  i932.skeletonDataModifiers = i936
  var i939 = i933[7]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( i939[i + 0] );
  }
  i932.fromAnimation = i938
  var i941 = i933[8]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( i941[i + 0] );
  }
  i932.toAnimation = i940
  i932.duration = i933[9]
  i932.defaultMix = i933[10]
  request.r(i933[11], i933[12], 0, i932, 'controller')
  return i932
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i944 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i945 = data
  i944.applyAdditiveMaterial = !!i945[0]
  var i947 = i945[1]
  var i946 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i947.length; i += 1) {
    i946.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i947[i + 0]));
  }
  i944.additiveMaterials = i946
  var i949 = i945[2]
  var i948 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i949.length; i += 1) {
    i948.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i949[i + 0]));
  }
  i944.multiplyMaterials = i948
  var i951 = i945[3]
  var i950 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i951.length; i += 1) {
    i950.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i951[i + 0]));
  }
  i944.screenMaterials = i950
  i944.requiresBlendModeMaterials = !!i945[4]
  return i944
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i954 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i955 = data
  i954.pageName = i955[0]
  request.r(i955[1], i955[2], 0, i954, 'material')
  return i954
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i958 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i959 = data
  request.r(i959[0], i959[1], 0, i958, 'atlasFile')
  var i961 = i959[2]
  var i960 = []
  for(var i = 0; i < i961.length; i += 2) {
  request.r(i961[i + 0], i961[i + 1], 2, i960, '')
  }
  i958.materials = i960
  i958.textureLoadingMode = i959[3]
  request.r(i959[4], i959[5], 0, i958, 'onDemandTextureLoader')
  return i958
}

Deserializers["CameraConfig"] = function (request, data, root) {
  var i962 = root || request.c( 'CameraConfig' )
  var i963 = data
  i962.cameraCenterX = i963[0]
  i962.cameraCenterY = i963[1]
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i965 = data
  var i967 = i965[0]
  var i966 = []
  for(var i = 0; i < i967.length; i += 1) {
    i966.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i967[i + 0]) );
  }
  i964.files = i966
  i964.componentToPrefabIds = i965[1]
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i971 = data
  i970.path = i971[0]
  request.r(i971[1], i971[2], 0, i970, 'unityObject')
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i973 = data
  var i975 = i973[0]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i975[i + 0]) );
  }
  i972.scriptsExecutionOrder = i974
  var i977 = i973[1]
  var i976 = []
  for(var i = 0; i < i977.length; i += 1) {
    i976.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i977[i + 0]) );
  }
  i972.sortingLayers = i976
  var i979 = i973[2]
  var i978 = []
  for(var i = 0; i < i979.length; i += 1) {
    i978.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i979[i + 0]) );
  }
  i972.cullingLayers = i978
  i972.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i973[3], i972.timeSettings)
  i972.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i973[4], i972.physicsSettings)
  i972.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i973[5], i972.physics2DSettings)
  i972.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i973[6], i972.qualitySettings)
  i972.enableRealtimeShadows = !!i973[7]
  i972.enableAutoInstancing = !!i973[8]
  i972.enableDynamicBatching = !!i973[9]
  i972.lightmapEncodingQuality = i973[10]
  i972.desiredColorSpace = i973[11]
  var i981 = i973[12]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( i981[i + 0] );
  }
  i972.allTags = i980
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i985 = data
  i984.name = i985[0]
  i984.value = i985[1]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i989 = data
  i988.id = i989[0]
  i988.name = i989[1]
  i988.value = i989[2]
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i993 = data
  i992.id = i993[0]
  i992.name = i993[1]
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i995 = data
  i994.fixedDeltaTime = i995[0]
  i994.maximumDeltaTime = i995[1]
  i994.timeScale = i995[2]
  i994.maximumParticleTimestep = i995[3]
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i997 = data
  i996.gravity = new pc.Vec3( i997[0], i997[1], i997[2] )
  i996.defaultSolverIterations = i997[3]
  i996.bounceThreshold = i997[4]
  i996.autoSyncTransforms = !!i997[5]
  i996.autoSimulation = !!i997[6]
  var i999 = i997[7]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i999[i + 0]) );
  }
  i996.collisionMatrix = i998
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1003 = data
  i1002.enabled = !!i1003[0]
  i1002.layerId = i1003[1]
  i1002.otherLayerId = i1003[2]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1005 = data
  request.r(i1005[0], i1005[1], 0, i1004, 'material')
  i1004.gravity = new pc.Vec2( i1005[2], i1005[3] )
  i1004.positionIterations = i1005[4]
  i1004.velocityIterations = i1005[5]
  i1004.velocityThreshold = i1005[6]
  i1004.maxLinearCorrection = i1005[7]
  i1004.maxAngularCorrection = i1005[8]
  i1004.maxTranslationSpeed = i1005[9]
  i1004.maxRotationSpeed = i1005[10]
  i1004.baumgarteScale = i1005[11]
  i1004.baumgarteTOIScale = i1005[12]
  i1004.timeToSleep = i1005[13]
  i1004.linearSleepTolerance = i1005[14]
  i1004.angularSleepTolerance = i1005[15]
  i1004.defaultContactOffset = i1005[16]
  i1004.autoSimulation = !!i1005[17]
  i1004.queriesHitTriggers = !!i1005[18]
  i1004.queriesStartInColliders = !!i1005[19]
  i1004.callbacksOnDisable = !!i1005[20]
  i1004.reuseCollisionCallbacks = !!i1005[21]
  i1004.autoSyncTransforms = !!i1005[22]
  var i1007 = i1005[23]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1007[i + 0]) );
  }
  i1004.collisionMatrix = i1006
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1011 = data
  i1010.enabled = !!i1011[0]
  i1010.layerId = i1011[1]
  i1010.otherLayerId = i1011[2]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1013 = data
  var i1015 = i1013[0]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1015[i + 0]) );
  }
  i1012.qualityLevels = i1014
  var i1017 = i1013[1]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( i1017[i + 0] );
  }
  i1012.names = i1016
  i1012.shadows = i1013[2]
  i1012.anisotropicFiltering = i1013[3]
  i1012.antiAliasing = i1013[4]
  i1012.lodBias = i1013[5]
  i1012.shadowCascades = i1013[6]
  i1012.shadowDistance = i1013[7]
  i1012.shadowmaskMode = i1013[8]
  i1012.shadowProjection = i1013[9]
  i1012.shadowResolution = i1013[10]
  i1012.softParticles = !!i1013[11]
  i1012.softVegetation = !!i1013[12]
  i1012.activeColorSpace = i1013[13]
  i1012.desiredColorSpace = i1013[14]
  i1012.masterTextureLimit = i1013[15]
  i1012.maxQueuedFrames = i1013[16]
  i1012.particleRaycastBudget = i1013[17]
  i1012.pixelLightCount = i1013[18]
  i1012.realtimeReflectionProbes = !!i1013[19]
  i1012.shadowCascade2Split = i1013[20]
  i1012.shadowCascade4Split = new pc.Vec3( i1013[21], i1013[22], i1013[23] )
  i1012.streamingMipmapsActive = !!i1013[24]
  i1012.vSyncCount = i1013[25]
  i1012.asyncUploadBufferSize = i1013[26]
  i1012.asyncUploadTimeSlice = i1013[27]
  i1012.billboardsFaceCameraPosition = !!i1013[28]
  i1012.shadowNearPlaneOffset = i1013[29]
  i1012.streamingMipmapsMemoryBudget = i1013[30]
  i1012.maximumLODLevel = i1013[31]
  i1012.streamingMipmapsAddAllCameras = !!i1013[32]
  i1012.streamingMipmapsMaxLevelReduction = i1013[33]
  i1012.streamingMipmapsRenderersPerFrame = i1013[34]
  i1012.resolutionScalingFixedDPIFactor = i1013[35]
  i1012.streamingMipmapsMaxFileIORequests = i1013[36]
  i1012.currentQualityLevel = i1013[37]
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1023 = data
  i1022.weight = i1023[0]
  i1022.vertices = i1023[1]
  i1022.normals = i1023[2]
  i1022.tangents = i1023[3]
  return i1022
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D":{"name":0,"bounciness":1,"friction":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[65],"66":[30],"67":[68],"69":[68],"70":[68],"71":[68],"72":[68],"73":[68],"74":[68],"75":[6],"76":[6],"77":[6],"78":[6],"79":[6],"80":[6],"81":[6],"82":[6],"83":[6],"84":[6],"85":[6],"86":[6],"87":[6],"88":[30],"89":[43],"90":[91],"92":[91],"49":[16],"47":[44],"93":[52],"3":[4],"94":[95],"96":[97],"98":[99],"100":[7],"101":[99],"102":[16],"103":[16],"51":[49],"23":[21,16],"104":[16],"50":[49],"105":[16],"106":[16],"107":[16],"108":[16],"109":[16],"110":[16],"111":[16],"112":[16],"113":[16],"114":[21,16],"115":[16],"116":[16],"117":[16],"118":[16],"25":[21,16],"119":[16],"120":[53],"121":[53],"54":[53],"122":[53],"123":[30],"124":[30],"125":[126],"127":[30],"128":[129],"130":[16],"131":[21,16],"44":[43],"52":[21,16],"132":[19,43],"133":[43],"134":[43,41],"135":[68],"136":[6],"137":[129],"138":[139],"140":[99]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MonoBehaviour","AudioBase","UnityEngine.AudioSource","Pin","UnityEngine.Rigidbody2D","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.BoxCollider2D","UnityEngine.PhysicsMaterial2D","ObjectSpawn","UnityEngine.CircleCollider2D","Point","UnityEngine.Texture2D","UnityEngine.RectTransform","PopupWin","UnityEngine.GameObject","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.UI.Button","UnityEngine.UI.Text","UnityEngine.Font","ButtonCTA","PopupLose","Gamee.Hiuk.Game.Input.TouchManager","UnityEngine.Camera","UnityEngine.AudioListener","GameManager_23_06_25","CanvasUI","Level_23_06_25","ScreenScale","King","CameraConfig","Container","Spawn","UnityEngine.AudioClip","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonDataAsset","Scale","AnimatorSkeleton","Gamee.Hiuk.Pattern.PoolManager","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","Spine.Unity.SkeletonGraphic","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","AnimatorSkeletonUI","Gamee.Hiuk.Component.Collisider2DComponent","UnityEngine.Collider2D","Gamee.Hiuk.Component.Collision2DComponent","UnityEngine.Collision2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.54f1";

Deserializers.productName = "PA-KingPin";

Deserializers.lunaInitializationTime = "07/02/2025 02:20:02";

Deserializers.lunaDaysRunning = "0.2";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "PA_02_07_25_HVH";

Deserializers.lunaAppID = "27960";

Deserializers.projectId = "38b914a23444dd646bef15c8141a89e2";

Deserializers.packagesInfo = "com.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1752";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4061";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, particle-system";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.PAKingPin";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "e285cb66-14a3-442b-9ed9-80ee1b466ba2";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

