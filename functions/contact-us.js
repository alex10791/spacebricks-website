export async function onRequestPost(context) {
  const formData = await context.request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // Simple validation
  if (!email || !message) {
    return new Response("Missing fields", { status: 400 });
  }

  // Example: Log or send to email API
  console.log("New contact:", { name, email, message });

  return new Response("Thank you for your message!", { status: 200 });
}
