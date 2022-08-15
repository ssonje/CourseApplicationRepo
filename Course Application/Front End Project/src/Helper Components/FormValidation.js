export const FormValidation = (course) => {

    const errors = {};

    if (!course.name) {
        errors.name = "Course Title cannot be empty!";
    }

    if (!course.description) {
        errors.description = "Course Description cannot be empty!";
    }

    return errors;
}