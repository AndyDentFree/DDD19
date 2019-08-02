/**
 * Created by Andy Dent.
 */

package com.company_name.menu_animation.activity

import android.support.v4.view.animation.PathInterpolatorCompat
import android.content.Intent
import android.support.v7.app.AppCompatActivity
import android.graphics.Color
import com.company_name.menu_animation.R
import android.view.View
import android.animation.*
import android.widget.ImageView
import android.content.Context
import android.widget.Button
import android.support.constraint.ConstraintLayout
import android.util.TypedValue
import android.os.Bundle
import io.supernova.uitoolkit.animation.ViewBackgroundProperties


class DocTreeActivity: AppCompatActivity() {

	companion object {
		
		fun newIntent(context: Context): Intent {
		
			// Fill the created intent with the data you want to be passed to this Activity when it's opened.
			return Intent(context, DocTreeActivity::class.java)
		}
	}
	
	private lateinit var addItemMenuButton: Button
	private lateinit var addItemMenuPopupConstraintLayout: ConstraintLayout
	private lateinit var addCameraItemButton: Button
	
	override fun onCreate(savedInstanceState: Bundle?) {
	
		super.onCreate(savedInstanceState)
		this.setContentView(R.layout.doc_tree_activity)
		this.init()
	}
	
	private fun init() {
	
		// Configure add_item_menu component
		addItemMenuButton = this.findViewById(R.id.add_item_menu_button)
		addItemMenuButton.setOnClickListener({ view ->
			this.onAddItemMenuPressed()
		})
		
		// Configure add_item_menu_popup component
		addItemMenuPopupConstraintLayout = this.findViewById(R.id.add_item_menu_popup_constraint_layout)
		
		// Configure add_camera_item component
		addCameraItemButton = this.findViewById(R.id.add_camera_item_button)
		addCameraItemButton.setOnClickListener({ view ->
			this.onAddCameraItemPressed()
		})
	}
	
	fun onAddItemMenuPressed() {
	
		startAnimationOne()
	}
	
	fun onAddCameraItemPressed() {
	
		startAnimationTwo()
	}
	
	fun startAnimationOne() {
	
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
	}
	
	fun startAnimationTwo() {
	
		val animator1 = ObjectAnimator.ofPropertyValuesHolder(addItemMenuPopupConstraintLayout, PropertyValuesHolder.ofKeyframe(View.TRANSLATION_Y, Keyframe.ofFloat(0f, TypedValue.applyDimension(TypedValue.COMPLEX_UNIT_DIP, 0f, this.resources.displayMetrics)), Keyframe.ofFloat(0.2f, TypedValue.applyDimension(TypedValue.COMPLEX_UNIT_DIP, 10f, this.resources.displayMetrics)), Keyframe.ofFloat(0.4f, TypedValue.applyDimension(TypedValue.COMPLEX_UNIT_DIP, -20f, this.resources.displayMetrics)), Keyframe.ofFloat(0.45f, TypedValue.applyDimension(TypedValue.COMPLEX_UNIT_DIP, -20f, this.resources.displayMetrics)), Keyframe.ofFloat(1f, TypedValue.applyDimension(TypedValue.COMPLEX_UNIT_DIP, 2000f, this.resources.displayMetrics))))
		animator1.duration = 1000
		animator1.interpolator = PathInterpolatorCompat.create(0.22f, 0.61f, 0.61f, 1f)
		
		val animator2 = ObjectAnimator.ofPropertyValuesHolder(addItemMenuPopupConstraintLayout, PropertyValuesHolder.ofKeyframe(View.ALPHA, Keyframe.ofFloat(0f, 1f), Keyframe.ofFloat(0.4f, 1f), Keyframe.ofFloat(1f, 0f)))
		animator2.duration = 1000
		animator2.interpolator = PathInterpolatorCompat.create(0.22f, 0.61f, 0.61f, 1f)
		
		val animatorSet1 = AnimatorSet()
		animatorSet1.playTogether(animator1, animator2)
		animatorSet1.setTarget(addItemMenuPopupConstraintLayout)
		
		val animatorSet2 = AnimatorSet()
		animatorSet2.playTogether(animatorSet1)
		animatorSet2.start()
	}
}
