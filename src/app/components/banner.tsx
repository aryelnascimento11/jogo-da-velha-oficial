"use client"
import { useState } from "react"
import { table } from "console"

export default function Banner() {
    const [player, setPlayer] = useState("X")
    const [list, setList] = useState(["", "", "", "", "", "", "", "", ""])

    function marcar(index:number){
       if(list[index] != "")
       list[index] = player
        setList([...list])
        setPlayer(player == "X" ? "O" : "X ")
    }

    return (
      
            
                <table className="flex text-center justify-center">  
                    <tbody className="flex flex-col p-10"> 
                        <tr >
                            <td className="h-20 w-20 bg-blue-900 hover:scale-110 cursor-pointer text-black border border-black"></td>
                            <td className="h-20 w-20 bg-blue-900 hover:scale-110 cursor-pointer text-black border border-black"></td>
                            <td className="h-20 w-20 bg-blue-900 hover:scale-110 cursor-pointer text-black border border-black"></td>
                        </tr>
                        <tr >
                            <td className="h-20 w-20 bg-blue-900 hover:scale-110 cursor-pointer text-black border border-black"></td>
                            <td className="h-20 w-20 bg-blue-900 hover:scale-110 cursor-pointer text-black border border-black"></td>
                            <td className="h-20 w-20 bg-blue-900 hover:scale-110 cursor-pointer text-black border border-black"></td>
                        </tr>
                        <tr >
                            <td className="h-20 w-20 bg-blue-900 hover:scale-110 cursor-pointer text-black border border-black"></td>
                            <td className="h-20 w-20 bg-blue-900 hover:scale-110 cursor-pointer text-black border border-black"></td>
                            <td className="h-20 w-20 bg-blue-900 hover:scale-110 cursor-pointer text-black border border-black"></td>
                        </tr>
                    </tbody>
                </table>
            
       
    )
}