/**
 * @compoent
 * `FormValidation` component provides functionality to validate the form.
 */
export const FormValidation = (course) => {

    const errors = {};

    if (!course.name) {
        errors.name = "Course Name cannot be empty!";
    }

    if (!course.description) {
        errors.description = "Course Description cannot be empty!";
    }

    return errors;
}
