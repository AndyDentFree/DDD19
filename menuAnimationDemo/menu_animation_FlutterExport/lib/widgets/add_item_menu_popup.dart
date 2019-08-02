
import 'package:flutter/material.dart';
import 'package:supernova_flutter_ui_toolkit/keyframes.dart';
import 'package:supernova_flutter_ui_toolkit/transitions.dart';


class addItemMenuPopup extends StatelessWidget {
  addItemMenuPopup({Key key, this.onAddCameraItemPressed, AnimationController addItemMenuPopupAnimationController}) :
    translateY = Interpolation<double>(keyframes: [
      Keyframe<double>(fraction: 0, value: 0),
      Keyframe<double>(fraction: 0.001, value: 3000),
      Keyframe<double>(fraction: 0.6, value: -25),
      Keyframe<double>(fraction: 0.75, value: 10),
      Keyframe<double>(fraction: 0.9, value: -5),
      Keyframe<double>(fraction: 1, value: 0),
    ]).animate(CurvedAnimation(
      parent: addItemMenuPopupAnimationController,
      curve: Interval(0, 1, curve: Cubic(0.215, 0.61, 0.61, 1)),
    )),
    opacity = Interpolation<double>(keyframes: [
      Keyframe<double>(fraction: 0, value: 1),
      Keyframe<double>(fraction: 0.001, value: 0),
      Keyframe<double>(fraction: 0.6, value: 1),
      Keyframe<double>(fraction: 1, value: 1),
    ]).animate(CurvedAnimation(
      parent: addItemMenuPopupAnimationController,
      curve: Interval(0, 1, curve: Cubic(0.215, 0.61, 0.61, 1)),
    )),
    translateY = Interpolation<double>(keyframes: [
      Keyframe<double>(fraction: 0, value: 0),
      Keyframe<double>(fraction: 0.001, value: 0),
      Keyframe<double>(fraction: 0.2, value: 10),
      Keyframe<double>(fraction: 0.4, value: -20),
      Keyframe<double>(fraction: 0.45, value: -20),
      Keyframe<double>(fraction: 1, value: 2000),
    ]).animate(CurvedAnimation(
      parent: addItemMenuPopupAnimationController,
      curve: Interval(0, 1, curve: Cubic(0.215, 0.61, 0.61, 1)),
    )),
    opacity = Interpolation<double>(keyframes: [
      Keyframe<double>(fraction: 0, value: 1),
      Keyframe<double>(fraction: 0.001, value: 1),
      Keyframe<double>(fraction: 0.4, value: 1),
      Keyframe<double>(fraction: 1, value: 0),
    ]).animate(CurvedAnimation(
      parent: addItemMenuPopupAnimationController,
      curve: Interval(0, 1, curve: Cubic(0.215, 0.61, 0.61, 1)),
    )),
  super(key: key);
  VoidCallback onAddCameraItemPressed;
  Animation<double> translateY;
  Animation<double> opacity;
  Animation<double> translateY;
  Animation<double> opacity;
  
  @override
  Widget build(BuildContext context) {
  
    return FadeTransition(
      opacity: this.opacity,
      child: TranslationTransition(
        translationY: this.translateY,
        child: Container(
          decoration: BoxDecoration(
            color: Color.fromARGB(255, 240, 246, 246),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Container(
                height: 76,
                margin: EdgeInsets.only(left: 18, top: 15, right: 18),
                child: FlatButton(
                  onPressed: this.onAddCameraItemPressed,
                  color: Colors.transparent,
                  textColor: Color.fromARGB(255, 0, 0, 0),
                  padding: EdgeInsets.all(0),
                  child: Text("",),
                ),
              ),
              Container(
                height: 64,
                margin: EdgeInsets.only(left: 17, top: 16, right: 19),
                child: Image.asset(
                  "assets/images/add-photo-item.png",
                  fit: BoxFit.none,
                ),
              ),
              Container(
                height: 68,
                margin: EdgeInsets.only(left: 15, top: 16, right: 17),
                child: Image.asset(
                  "assets/images/add-downloaded-item.png",
                  fit: BoxFit.none,
                ),
              ),
              Container(
                height: 76,
                margin: EdgeInsets.only(left: 18, top: 16, right: 18),
                child: Image.asset(
                  "assets/images/add-paint-item.png",
                  fit: BoxFit.none,
                ),
              ),
              Spacer(),
              Container(
                height: 76,
                margin: EdgeInsets.only(left: 17, right: 19, bottom: 20),
                child: Image.asset(
                  "assets/images/add-text-item.png",
                  fit: BoxFit.none,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}