const Page = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/users/1");
    const data = await response.json();

    return (
      <div>
        <h1>Contact Page</h1>
        <p>
          Name: {data.name.firstname} {data.name.lastname}
        </p>
        <p>Email: {data.email}</p>
        <p>Phone: {data.phone}</p>
      </div>
    );
  } catch (error) {
    return <div>მოხდა შეცდომა! გთხოვთ, სცადეთ ხელახლა...</div>;
  }
};

export default Page;
