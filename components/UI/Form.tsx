import React from "react"

const Form = () => {
  const styles = {
    btn:
      "flex items-center justify-around w-40 px-2 py-2 font-medium text-white uppercase my-gradient rounded shadow-lg cursor-pointer hover:bg-white hover:text-yellow-500 animate-bounce",
  }

  return (
    <>
      <section className="flex flex-col justify-center mt-20 min-h-screen-center">
        <article className="container max-w-md p-6 mx-auto bg-white rounded-md shadow-xl">
          <h2 className="inline-block mb-2 text-gradient my-gradient">
            Get in touch here!
          </h2>
          <span className="text-4xl">👇🏼</span>
          <form
            action="https://formspree.io/f/xaylglnj"
            method="POST"
            className="flex flex-col"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full p-2 mb-2 border rounded-md"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full p-2 mb-2 border rounded-md"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Type your message here..."
              required
              className="w-full p-2 mb-2 border rounded-md"
            />
            <button type="submit" className={`mx-auto mt-4 ${styles.btn}`}>
              Submit
            </button>
          </form>
        </article>
      </section>
    </>
  )
}

export default Form
