/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async()=>{
        return[
            {
                source:'/about',
                destination:'/',
                permanent:false
            },
            {
                source:"/about/:user",
                destination:'/about',
                permanent:false
            }
        ]
    }
}

module.exports = nextConfig
