export function formatErrorMessage(error) {
    if (!error || !error.data) {
      return "No error details provided.";
    }
  
  //   const title = error.data.Title || "No title provided";
  //   const validationErrors = error.data.ValidationErrors || [];
  
  //   // Collect formatted messages for each validation error
  //   const errorMessages = validationErrors.map((err) => {
  //     const name = err.Name || "Unknown";
  //     const reason = err.Reason || "No reason provided";
  //     return `Name: ${name}\nReason: ${reason}`;
      //   });
      const title = error.data.Title || "No title provided";
      const validationError = error.data.ValidationErrors?.[0] || {};
      const name = validationError.Name || "No name provided";
      const reason = validationError.Reason || "No reason provided";
  
    // Combine title with individual error messages
      //return `Title: ${title}\n${errorMessages.join("\n\n")}`;
      return `Title: ${title}\n\nName: ${name}\n\nReason: ${reason}`;
  }
   