---
title: Anyone can Animate
pdf: anyoneAnimatingDDD19.pdf
slideNumber: true
controls: true
---
<!-- usual source https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js -->
<script src="./assets/lottie-player.js"></script>

#
![](./assets/SponsorsBlack.png)


# Anyone can Animate {bg=#eee}

**(Even if they can't draw)**

Andy Dent's

strongly-held opinions

weakly-held pencils

# Animation as Life?

**(but not as we know it)**

See lots of links on my github site (also be on the last slide)

[github.com/AndyDentFree/DDD19][gh]

- Val Head's book _Interface Animation_, videos etc
- Disney's book [The Illusion of Life][ill]
- [As video][12p] and [gifs][12g] 8 of which follow
- [Really good article][Dis12] illustrating them with longer clips from Disney and Pixar movies, and explanations

<aside class="notes">
The gifs come from the video mentioned which show film fake scratches so you see odd flashes of hair and other tiny white marks
</aside>

# Principle 1 - Squash and Stretch

![](./assets/12p_squashandstretch.gif)

# Principle 2 - Anticipation

![](./assets/12p_anticipation.gif)


# Principle 5 - Follow Through & Overlapping

![](./assets/12p_followthrough.gif)


# Principle 6 - Slow In and Slow Out

![](./assets/12p_slowinout.gif)


# Principle 7 - Arcs

![](./assets/12p_arcs.gif)


# Principle 8 - Secondary Action

![](./assets/12p_secondaryaction.gif)


# Principle 9 - Timing

![](./assets/12p_timing.gif)


# Principle 10 - Exaggeration

![](./assets/12p_exaggeration.gif)



# Why Animate? - Designers

**Amuse**

Distract

Inform

<lottie-player 
    src="./assets/8103-jump.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop autoplay >
</lottie-player>

<aside class="notes">
Start at about 3:30
</aside>


# Why Animate? - Designers

Amuse

**Distract**

Inform

<lottie-player 
    src="./assets/961-checked-loading.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop autoplay >
</lottie-player>

<aside class="notes">
Start at about 3:30
</aside>


# Why Animate? - Designers

Amuse

Distract

**Inform**

<lottie-player 
    src="./assets/926-menu-volver.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop autoplay >
</lottie-player>

<aside class="notes">
Start at about 3:30
</aside>

# Why Animate? - Developer's View
<section style="text-align: left; font-size: 80px">
**D** istract

**I** nform

**E** ntertain
</section>

# Animation as a new Developer Hell

Animations aren't the only thing that go in circles.

The designer-developer loop finds new things to design that have to be manually translated to code.

and then the loop closes

# Coming to [save us][flash] (last time)
![](./assets/flashSaviour.png) 

# New Breed of Tools

Start with Sketch or other vector prototype

Add animation

Generate working code
<aside class="notes">
Start at about 6:00
</aside>
# Web world

SVG-based vectors

Pure CSS 

GSAP Greensock JS-driven canvas

and...
<aside class="notes">
Not focused on this
</aside>

# Lottie

Simple animated vectors from Adobe After Effects via _bodymovin_ plugin to JSON, effectively a [standard][lottieAE]

Fast native & web players by [AirBnb][airbnbLottie]

Other editors such as [Haiku] and [Keyshape]

As seen on the Why Animate? - Designers slide, content from [lottiefiles.com][lottieSamples]

<aside class="notes">
Looking at the support slide linked above, the Path support is pretty good with gradients missing on Windows. Masks in AE are poorly supported as are Text effects, Layer effects and Merge paths
</aside>
# Mostly Mobile Tools

[Supernova Studio][SS]

[PaintCode]

[Flow] 
<aside class="notes">
PaintCode not really animation but can parameterise some vectors, generates range of code.
Flow just generates iOS and web
SS free to prototype and preview, pay for export code
</aside>

# Simple Animation Example

![](./assets/iOSTGdemoAnim.gif)
<aside class="notes">
Start at about 10:40
</aside>

# Supernova Editor

![](./assets/SupernovaAnimationEditor.png)

# 
<section data-background-video="./assets/menuAnimation.mp4" data-background-video-loop data-background-video-muted>
</section>
<aside class="notes">
Movie Start at about 11:40
</aside>

# Supernova Generated - Swift

```swift
let animationElement1 = CAAnimationGroup()
animationElement1.isRemovedOnCompletion = false
animationElement1.fillMode = .removed
animationElement1.animations = []

let animationProperty1 = CAKeyframeAnimation()
animationProperty1.beginTime = 0
animationProperty1.repeatCount = Float(1)
animationProperty1.duration = 1
animationProperty1.autoreverses = false
animationProperty1.isRemovedOnCompletion = false
animationProperty1.timingFunction = CAMediaTimingFunction(controlPoints: 0.22, 0.61, 0.61, 1)
animationProperty1.keyPath = "transform.translation.y"
animationProperty1.keyTimes = [ 0, 0.6, 0.75, 0.9, 1 ]
animationProperty1.values = [ 3000, -25, 10, -5, 0 ]
animationProperty1.animations?.append(animationProperty1)
  ```

# Supernova Generated - Kotlin

```kotlin
val animator1 = ObjectAnimator.ofPropertyValuesHolder(addItemMenuPopupConstraintLayout, PropertyValuesHolder.ofKeyframe(View.TRANSLATION_Y, Keyframe.ofFloat(0f, TypedValue.applyDimension(TypedValue.COMPLEX_UNIT_DIP, 3000f, this.resources.displayMetrics)), Keyframe.ofFloat(0.6f, TypedValue.applyDimension(TypedValue.COMPLEX_UNIT_DIP, -25f, this.resources.displayMetrics)), Keyframe.ofFloat(0.75f, TypedValue.applyDimension(TypedValue.COMPLEX_UNIT_DIP, 10f, this.resources.displayMetrics)), Keyframe.ofFloat(0.9f, TypedValue.applyDimension(TypedValue.COMPLEX_UNIT_DIP, -5f, this.resources.displayMetrics)), Keyframe.ofFloat(1f, TypedValue.applyDimension(TypedValue.COMPLEX_UNIT_DIP, 0f, this.resources.displayMetrics))))
animator1.duration = 1000
animator1.interpolator = PathInterpolatorCompat.create(0.22f, 0.61f, 0.61f, 1f)

val animator2 = ObjectAnimator.ofPropertyValuesHolder(addItemMenuPopupConstraintLayout, PropertyValuesHolder.ofKeyframe(View.ALPHA, Keyframe.ofFloat(0f, 0f), Keyframe.ofFloat(0.6f, 1f), Keyframe.ofFloat(1f, 1f)))
animator2.duration = 1000
animator2.interpolator = PathInterpolatorCompat.create(0.22f, 0.61f, 0.61f, 1f)

val animatorSet1 = AnimatorSet()
animatorSet1.playTogether(animator1, animator2)
animatorSet1.setTarget(addItemMenuPopupConstraintLayout)

val animatorSet2 = AnimatorSet()
animatorSet2.playTogether(animatorSet1)
animatorSet2.start()
```

# Supernova Generated - React Native

```javacript
this.state.addItemMenuPopupViewTranslateY.setValue(0)
this.state.addItemMenuPopupViewOpacity.setValue(0)

// Configure animation and trigger
Animated.parallel([Animated.parallel([Animated.timing(this.state.addItemMenuPopupViewTranslateY, {
  duration: 1000,
  easing: Easing.bezier(0.22, 0.61, 0.61, 1),
  toValue: 1,
}), Animated.timing(this.state.addItemMenuPopupViewOpacity, {
  duration: 1000,
  easing: Easing.bezier(0.22, 0.61, 0.61, 1),
  toValue: 1,
})])]).start()
```

<aside class="notes">
Flutter not yet generating animation
</aside>


# Further Details

[github.com/AndyDentFree/DDD19][gh]

Contains this presentation and links to all tools mentioned, full samples and media to build anything shown in the movies.

Twitter: @andydentperth

[gh]: https://github.com/AndyDentFree/DDD19
[12p]: https://vimeo.com/93206523
[ill]: https://www.amazon.com/Illusion-Life-Disney-Animation/dp/0786860707/ref=sr_1_1?ie=UTF8&qid=1452379828&sr=8-1
[12g]: https://the12principles.tumblr.com/
[flash]: https://www.youtube.com/watch?v=LfmrHTdXgK4
[Dis12]: https://ohmy.disney.com/movies/2016/07/20/twelve-principles-animation-disney/
[lottieSamples]: https://lottiefiles.com/b.bfer
[airbnbLottie]: http://airbnb.io/lottie/#/
[Keyshape]: https://www.keyshapeapp.com/
[Haiku]: https://www.haiku.ai/
[lottieAE]: http://airbnb.io/lottie/#/supported-features
[Flow]: https://createwithflow.com/
[PaintCode]:https://www.paintcodeapp.com/
[SS]: https://supernova.io/
