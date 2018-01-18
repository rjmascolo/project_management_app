export const createProjectFormValidation = (formData) => {
  let errors = {}
  if (formData.projectName === '') {
    errors["projectName"] = "Needs to be filled in";
  }
  if (formData.projectDescription === '') {
    errors["projectDescription"] = "Needs to be filled in";
  }
  if (formData.projectImage === '') {
    errors["projectImage"] = "Needs to be filled in";
  }
  if (formData.projectType === '') {
    errors["projectType"] = "Needs to be filled in";
  }
  if (formData.creativeDeliverables === '') {
    errors["creativeDeliverables"] = "Needs to be filled in";
  }
  if (formData.projectUsers.length < 1) {
    errors["projectUsers"] = "Needs to include users";
  }
  formData.deliverables.map( (deliverable, i) => {
    if( deliverable.description === '' ) {
      errors[`deliverable-${i}`] = "Needs to include a description";
    }
  })
  return errors
}
