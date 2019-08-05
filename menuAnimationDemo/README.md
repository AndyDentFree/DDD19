# DDD19 MenuAnimationSample
Sample originally for my animation session at [DDD 2019 conference][ddd] in Perth, Western Australia.

This sample contains files used to produce a menu animation effect as shown in the 68MB [movie].

## Files in the Sample

1. `menuAnimation.sketch` is the Sketch vector art showing a toolbar across the bottom of the screen and a popup menu.
2. `menuAnimation.snproject` is a [SupernovaStudio][sns] document created by importing that Sketch art and applying animations and very little else. It was created using a pre-release copy of v7 which Supernova kindly supplied so I could show the new user interface.
3. Folders such as `menuAnimation_iOSExport` are the full project exports from that project. Note that the Flutter code generator currently lacks animation support.

Note that `menuAnimation.screenflow` was the recording of this test on a Mac and appeared in the repo by mistake, I've deleted it now so people grabbing the current version don't get confused, but if you look at the history or grabbed an earlier copy of the repo now you know about it. The exported [movie] is the entire content of what I recorded.

## Apologetic Explanation of the Jumping Menu
As I was using an early release, I ran into stability issues recording the video behaviour immediately prior to DDD.

Thus you can see the menu apparently leaps upwards between the Edit mode and Preview mode.

If you have very sharp eyes, you will notice that the artboard imported is a bit shorter than the standard iPhone 8 screen. By default, Supernova creates positioning rules based from the _top_ of the screen. My artboard is a height for an iMessage plugin _Expanded view_. 

After the Supernova v7 release, this sample will be edited to correct the layout to bind the menu to the bottom of the screen and these flaws will be fixed. The demo will then look a little more professional.

Regardless, I logged [Issue 131] on the Supernova tracker so they can look at it. As noted there, I verified this is a v6 behaviour too and, in the process of logging the issue, realised it's probably due my short artboard.

[ddd]: https://dddperth.com/
[sns]: https://supernova.io/
[movie]: https://github.com/AndyDentFree/DDD19/blob/master/assets/menuAnimation.mp4
[Issue 131]: https://github.com/Supernova-Studio/public-issue-tracker/issues/131
