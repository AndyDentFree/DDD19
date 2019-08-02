
import 'package:flutter/material.dart';
import 'package:flutter/animation.dart';
import 'package:menu_animation/widgets/add_item_menu_popup.dart';


class DocTreeWidget extends StatefulWidget {
  
  @override
  State<StatefulWidget> createState() => _DocTreeWidgetState();
}


class _DocTreeWidgetState extends State<DocTreeWidget> with SingleTickerProviderStateMixin {
  AnimationController addItemMenuPopupAnimationController;
  
  @override
  void initState() {
  
    super.initState();
    this.addItemMenuPopupAnimationController = AnimationController(duration: Duration(milliseconds: 1000), vsync: this);
  }
  
  @override
  void dispose() {
  
    super.dispose();
    this.addItemMenuPopupAnimationController.dispose();
  }
  
  void onAddItemMenuPressed(BuildContext context) => startAnimationOne();
  
  void onAddCameraItemPressed(BuildContext context) => startAnimationTwo();
  
  void startAnimationOne() => this.addItemMenuPopupAnimationController.forward();
  
  void startAnimationTwo() => this.addItemMenuPopupAnimationController.forward();
  
  @override
  Widget build(BuildContext context) {
  
    return Scaffold(
      body: Container(
        constraints: BoxConstraints.expand(),
        decoration: BoxDecoration(
          color: Color.fromARGB(255, 255, 255, 255),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Container(
              height: 459,
              margin: EdgeInsets.only(left: 43, top: 47, right: 220),
              child: addItemMenuPopup(
                onAddCameraItemPressed: () => this.onAddCameraItemPressed(context),
                addItemMenuPopupAnimationController: this.addItemMenuPopupAnimationController,
              ),
            ),
            Spacer(),
            Container(
              height: 70,
              decoration: BoxDecoration(
                color: Color.fromARGB(255, 240, 246, 246),
              ),
              child: Row(
                children: [
                  Container(
                    width: 48,
                    height: 48,
                    margin: EdgeInsets.only(left: 11),
                    child: Image.asset(
                      "assets/images/scenes-menu.png",
                      fit: BoxFit.none,
                    ),
                  ),
                  Container(
                    width: 48,
                    height: 48,
                    margin: EdgeInsets.only(left: 16),
                    child: FlatButton(
                      onPressed: () => this.onAddItemMenuPressed(context),
                      color: Colors.transparent,
                      textColor: Color.fromARGB(255, 0, 0, 0),
                      padding: EdgeInsets.all(0),
                      child: Text("",),
                    ),
                  ),
                  Container(
                    width: 48,
                    height: 48,
                    margin: EdgeInsets.only(left: 16),
                    child: Image.asset(
                      "assets/images/tools.png",
                      fit: BoxFit.none,
                    ),
                  ),
                  Spacer(),
                  Container(
                    width: 48,
                    height: 48,
                    margin: EdgeInsets.only(right: 16),
                    child: Image.asset(
                      "assets/images/play.png",
                      fit: BoxFit.none,
                    ),
                  ),
                  Container(
                    width: 48,
                    height: 48,
                    margin: EdgeInsets.only(right: 60),
                    child: Image.asset(
                      "assets/images/send.png",
                      fit: BoxFit.none,
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}