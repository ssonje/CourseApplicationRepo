package com.springRest.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springRest.DAO.CourseDAO;
import com.springRest.DTO.Course;

@Service
public class CourseServiceImpl implements CourseService {

	@Autowired
	private CourseDAO courseDAO;
	
	@Override
	public List<Course> getCourses() {
		return courseDAO.findAll();
	}

	@Override
	public Course getCourse(long courseID) {
		Optional<Course> course = courseDAO.findById(courseID);
		if (course.isPresent()) {
			return course.get();
		}

		return null;
	}

	@Override
	public Course addCourse(Course course) {
		courseDAO.save(course);
		return course;
	}

	@Override
	public Course updateCourse(Course course) {
		if (getCourse(course.getId()) != null) {
			return courseDAO.save(course);
		}

		return null;
	}

	@Override
	public void deleteCourse(long courseID) {
		courseDAO.deleteById(courseID);
	}

}
