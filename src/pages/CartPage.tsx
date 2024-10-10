import React from 'react'

const CartPage = () => {
  return (
    <div>
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <title>E-Commerce App</title>
  {/* Navbar */}
  <nav className="flex flex-wrap items-center justify-between bg-gray-600 px-6 py-3">
    <div className="mr-6 flex flex-shrink-0 items-center text-white">
      <img
        className="mx-auto h-10 w-auto"
        src="https://baitussalam.org/images/logo-2.svg"
        alt="Your Company"
      />
    </div>
    <div className="block lg:hidden">
      <button title = 'title' className="flex items-center rounded border border-gray-500 px-3 py-2 text-gray-400 hover:border-white hover:text-white">
        <svg
          className="h-3 w-3 fill-current"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div className="block w-full flex-grow lg:flex lg:w-auto lg:items-center">
      <div className="text-sm lg:flex-grow">
        <a
          href="#"
          className="mr-4 mt-4 block text-gray-300 hover:text-white lg:mt-0 lg:inline-block"
        >
          Docs
        </a>
        <a
          href="#"
          className="mr-4 mt-4 block text-gray-300 hover:text-white lg:mt-0 lg:inline-block"
        >
          Examples
        </a>
        <a
          href="#"
          className="mt-4 block text-gray-300 hover:text-white lg:mt-0 lg:inline-block"
        >
          Blog
        </a>
      </div>
      <div>
        <button className="mt-4 inline-block rounded border border-gray-400 px-4 py-2 text-sm leading-none text-gray-300 hover:bg-gray-300 hover:text-gray-800 lg:mt-0">
          Logout
        </button>
      </div>
    </div>
  </nav>
  {/* Hero Section */}
  <div className="bg-[#F4F4F4]">
    <div className="mx-auto max-w-3xl px-3 py-5 text-center md:py-10">
      <h1 className="text-3xl font-semibold leading-tight text-[#1E1E1E] md:text-[40px]">
        All-in-One E-commerce App
      </h1>
      <h2 className="mt-5 text-lg font-medium text-[#1E1E1E]">
        Discover premium products and enjoy shopping with us. Risk Free
        Shopping!
      </h2>
    </div>
  </div>
  {/* Cart Page */}
  <div className="container mx-auto mb-10 max-w-6xl bg-white p-6">
    <h1 className="mb-6 text-3xl font-bold text-gray-800">Shopping Cart</h1>
    {/* Cart Items Section */}
    <div className="flex flex-col gap-6 lg:flex-row">
      {/* Cart Items List */}
      <div className="w-full lg:w-3/4">
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          {/* Single Cart Item */}
          <div className="mb-4 flex items-center justify-between border-b pb-4">
            <div className="flex items-center space-x-4">
              <img
                className="h-20 w-20 object-cover"
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                alt="Product Image"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  Product Title
                </h2>
                <p className="text-sm text-gray-500">Price: $99.99</p>
              </div>
            </div>
            <button className="text-red-500 hover:text-red-600">Remove</button>
          </div>
          {/* Repeat the above block for each product in the cart */}
          <div className="mb-4 flex items-center justify-between border-b pb-4">
            <div className="flex items-center space-x-4">
              <img
                className="h-20 w-20 object-cover"
                src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                alt="Product Image"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  Another Product Title
                </h2>
                <p className="text-sm text-gray-500">Price: $79.99</p>
              </div>
            </div>
            <button className="text-red-500 hover:text-red-600">Remove</button>
          </div>
          {/* End of Product Block */}
        </div>
      </div>
      {/* Cart Summary Section */}
      <div className="w-full lg:w-1/4">
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h2 className="mb-4 text-xl font-bold text-gray-800">Summary</h2>
          <div className="mb-2 flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-semibold text-gray-800">$179.98</span>
          </div>
          <div className="mb-2 flex justify-between">
            <span className="text-gray-600">Shipping</span>
            <span className="font-semibold text-gray-800">$10.00</span>
          </div>
          <div className="mt-4 flex justify-between border-t pt-4">
            <span className="font-semibold text-gray-800">Total</span>
            <span className="font-bold text-gray-900">$189.98</span>
          </div>
          <button className="mt-6 w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  </div>
  {/* Footer Section */}
  <footer className="relative z-50 bg-[#191F33]">
    <div className="flex flex-col items-center px-4 py-12">
      <div>
        <a
          className="mb-8 flex items-center justify-center gap-5 text-white"
          href="/"
        >
          <img
            alt="Logo"
            className='img-styling'
            width={50}
            src="https://baitussalam.org/images/logo-2.svg"
          />
          <span className="text-3xl font-semibold tracking-wider">
            Bait-us-Salam
          </span>
        </a>
        <p className="max-w-xl text-center text-lg font-medium text-white">
          Shop Today!
        </p>
      </div>
    </div>
    <div className="bg-[#2E3447]">
      <div className="px-3 py-3 text-center">
        <span className="text-[#767E94]">
          Coded with 💙 by{/* */}
          <a rel="noopener noreferrer"
            href="https://www.linkedin.com/in/abdulbasitprofile/"
            target="_blank"
            className="text-white"
          >
            Abdul Basit{" "}
          </a>
          in Karachi
        </span>
      </div>
    </div>
  </footer>
</>

    </div>
  )
}

export default CartPage
