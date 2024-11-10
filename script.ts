document.addEventListener("DOMContentLoaded", () => {
    const dynamicTextBtn = document.getElementById("dynamicTextBtn") as HTMLButtonElement;
    const dynamicText = document.getElementById("dynamicText") as HTMLElement;
  
    dynamicTextBtn.addEventListener("click", () => {
      dynamicText.innerText = "You've triggered a dynamic message using TypeScript!";
    });
  
    const contactForm = document.getElementById("contactForm") as HTMLFormElement;
    const formResponse = document.getElementById("formResponse") as HTMLElement;
  
    contactForm?.addEventListener("submit", (e) => {
      e.preventDefault();
      formResponse.innerText = "Thank you for your message. We will get back to you soon!";
    });
  });
  