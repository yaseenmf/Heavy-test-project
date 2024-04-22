import useUser from "./../featuers/auth/useUser";

function header() {
  const { isLoading } = useUser;
  return <div className="bg-secondary-0 py-4 px-8 border-b">App header</div>;
}

export default header;
