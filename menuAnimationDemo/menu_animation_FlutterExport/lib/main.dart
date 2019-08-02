
import 'package:flutter/material.dart';
import 'package:menu_animation/screens/doc_tree_widget.dart';

void main() => runApp(App());


class App extends StatelessWidget {
  
  @override
  Widget build(BuildContext context) {
  
    return MaterialApp(
      home: DocTreeWidget(),
    );
  }
}