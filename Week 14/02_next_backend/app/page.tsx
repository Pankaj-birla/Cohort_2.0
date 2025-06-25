import client from "@/db";


export async function getUserDetails() {
  const user = await client.user.findFirst({});
  return {
    email: user?.username,
    password : user?.password,
  }
}

//async component
export default async function Home() {
  const userDetails = await getUserDetails();

  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                 Email : {userDetails?.email}
                </div>
                 Password : {userDetails?.password}
            </div>
        </div>
    </div>
  );
}
