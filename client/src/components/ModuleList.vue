<template lang="html">
<div id="module-list">
<div v-for="course in courseList">
	<course-btn :course="course" />
</div>
</div>
</template>

<script>
import ModuleService from '@/services/ModulesModuleService.js'
import CourseBtn from './courseBtn.vue'

export default {
	name: 'module-list',
	components: {
		'course-btn': CourseBtn
	},
	data () {
		return {
			courseList: []
		}
	},
	methods: {
		getCourseList () {
			ModuleService.getAllData()
			.then(result => {
				this.courseList = result
			})
		}
	},
	mounted () {
		this.getCourseList()
	}
}
</script>

<style lang="css" scoped>
</style>
