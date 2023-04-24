import { useRouter } from "next/router"
import React, { useEffect } from "react"





export default function Home() {
  
    const router = useRouter();

    useEffect(() => {
      router.replace('home/home')
    }, [router])

    return null
}


