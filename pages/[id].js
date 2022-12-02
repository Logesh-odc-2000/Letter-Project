import { useRouter } from 'next/router'
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
var items = [
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!"
    },
    {
        name: "Random Name #2",
        description: "Hello World!"
    }
]
const data = {
    "அ": [
        {
            "name": "அகல்",
            "imgSrc": "Images/அ/அகல்.jpg"
        },
        {
            "name": "அச்சு வெல்லம்",
            "imgSrc": "Images/அ/அச்சு வெல்லம்.jpg"
        },
        {
            "name": "அடுப்பு",
            "imgSrc": "Images/அ/அடுப்பு.jpg"
        },
        {
            "name": "அணில்",
            "imgSrc": "Images/அ/அணில்.jpg"
        },
        {
            "name": "அந்திமல்லி",
            "imgSrc": "Images/அ/அந்திமல்லி.jpg"
        },
        {
            "name": "அன்னம்",
            "imgSrc": "Images/அ/அன்னம்.jpg"
        },
        {
            "name": "அப்பளம்",
            "imgSrc": "Images/அ/அப்பளம்.jpg"
        },
        {
            "name": "அம்மா",
            "imgSrc": "Images/அ/அம்மா.jpg"
        },
        {
            "name": "அம்மி",
            "imgSrc": "Images/அ/அம்மி.jpg"
        },
        {
            "name": "அரிசி",
            "imgSrc": "Images/அ/அரிசி.jpg"
        },
        {
            "name": "அரும்பு",
            "imgSrc": "Images/அ/அரும்பு.jpg"
        },
        {
            "name": "அல்லி",
            "imgSrc": "Images/அ/அல்லி.jpg"
        }
    ],
    "ஆ": [
        {
            "name": "ஆகாயம்",
            "imgSrc": "Images/ஆ/ஆகாயம்.jpg"
        },
        {
            "name": "ஆசிரியர்",
            "imgSrc": "Images/ஆ/ஆசிரியர்.jpg"
        },
        {
            "name": "ஆட்டுக்கல்",
            "imgSrc": "Images/ஆ/ஆட்டுக்கல்.jpg"
        },
        {
            "name": "ஆட்டுக்குட்டி",
            "imgSrc": "Images/ஆ/ஆட்டுக்குட்டி.jpg"
        },
        {
            "name": "ஆணி",
            "imgSrc": "Images/ஆ/ஆணி.jpg"
        },
        {
            "name": "ஆந்தை",
            "imgSrc": "Images/ஆ/ஆந்தை.jpg"
        },
        {
            "name": "ஆப்பம்",
            "imgSrc": "Images/ஆ/ஆப்பம்.jpg"
        },
        {
            "name": "ஆமை",
            "imgSrc": "Images/ஆ/ஆமை.jpg"
        },
        {
            "name": "ஆய்தஎழுத்து",
            "imgSrc": "Images/ஆ/ஆய்தஎழுத்து.jpg"
        },
        {
            "name": "ஆறு",
            "imgSrc": "Images/ஆ/ஆறு.jpg"
        },
        {
            "name": "ஆலங்கட்டி",
            "imgSrc": "Images/ஆ/ஆலங்கட்டி.jpg"
        },
        {
            "name": "ஆலமரம்",
            "imgSrc": "Images/ஆ/ஆலமரம்.jpg"
        }
    ],
    "இ": [
        {
            "name": "இஞ்சி",
            "imgSrc": "Images/இ/இஞ்சி.jpg"
        },
        {
            "name": "இடிமின்னல்",
            "imgSrc": "Images/இ/இடிமின்னல்.jpg"
        },
        {
            "name": "இடியாப்பம்",
            "imgSrc": "Images/இ/இடியாப்பம்.jpg"
        },
        {
            "name": "இட்லி",
            "imgSrc": "Images/இ/இட்லி.jpg"
        },
        {
            "name": "இனிப்பு",
            "imgSrc": "Images/இ/இனிப்பு.jpg"
        },
        {
            "name": "இயற்கை",
            "imgSrc": "Images/இ/இயற்கை.jpg"
        },
        {
            "name": "இறகு",
            "imgSrc": "Images/இ/இறகு.jpg"
        },
        {
            "name": "இறால்",
            "imgSrc": "Images/இ/இறால்.jpg"
        },
        {
            "name": "இலந்தைபழம்",
            "imgSrc": "Images/இ/இலந்தைபழம்.jpg"
        },
        {
            "name": "இலை",
            "imgSrc": "Images/இ/இலை.jpg"
        },
        {
            "name": "இல்லம்",
            "imgSrc": "Images/இ/இல்லம்.jpg"
        },
        {
            "name": "இளநீர்",
            "imgSrc": "Images/இ/இளநீர்.jpg"
        }
    ],
    "ஈ": [
        {
            "name": "ஈ",
            "imgSrc": "Images/ஈ/ஈ.jpg"
        },
        {
            "name": "ஈகை",
            "imgSrc": "Images/ஈ/ஈகை.jpg"
        },
        {
            "name": "ஈசன்",
            "imgSrc": "Images/ஈ/ஈசன்.jpg"
        },
        {
            "name": "ஈசல்",
            "imgSrc": "Images/ஈ/ஈசல்.jpg"
        },
        {
            "name": "ஈச்சமரம்",
            "imgSrc": "Images/ஈ/ஈச்சமரம்.jpg"
        },
        {
            "name": "ஈட்டி",
            "imgSrc": "Images/ஈ/ஈட்டி.jpg"
        },
        {
            "name": "ஈதல்",
            "imgSrc": "Images/ஈ/ஈதல்.jpg"
        },
        {
            "name": "ஈமு",
            "imgSrc": "Images/ஈ/ஈமு.jpg"
        },
        {
            "name": "ஈயம்",
            "imgSrc": "Images/ஈ/ஈயம்.jpg"
        },
        {
            "name": "ஈரம்",
            "imgSrc": "Images/ஈ/ஈரம்.jpg"
        },
        {
            "name": "ஈரல்",
            "imgSrc": "Images/ஈ/ஈரல்.jpg"
        },
        {
            "name": "ஈறு",
            "imgSrc": "Images/ஈ/ஈறு.jpg"
        }
    ],
    "உ": [
        {
            "name": "உடை",
            "imgSrc": "Images/உ/உடை.jpg"
        },
        {
            "name": "உணவு",
            "imgSrc": "Images/உ/உணவு.jpg"
        },
        {
            "name": "உண்டியல்",
            "imgSrc": "Images/உ/உண்டியல்.jpg"
        },
        {
            "name": "உப்பு",
            "imgSrc": "Images/உ/உப்பு.jpg"
        },
        {
            "name": "உயிர் எழுத்துக்கள்",
            "imgSrc": "Images/உ/உயிர் எழுத்துக்கள்.jpg"
        },
        {
            "name": "உரல்",
            "imgSrc": "Images/உ/உரல்.jpg"
        },
        {
            "name": "உருளை",
            "imgSrc": "Images/உ/உருளை.jpg"
        },
        {
            "name": "உருளைக்கிழங்கு",
            "imgSrc": "Images/உ/உருளைக்கிழங்கு.jpg"
        },
        {
            "name": "உலகம்",
            "imgSrc": "Images/உ/உலகம்.jpg"
        },
        {
            "name": "உலக்கை",
            "imgSrc": "Images/உ/உலக்கை.jpg"
        },
        {
            "name": "உளி",
            "imgSrc": "Images/உ/உளி.jpg"
        },
        {
            "name": "உழவர்",
            "imgSrc": "Images/உ/உழவர்.jpg"
        }
    ],
    "ஊ": [
        {
            "name": "ஊக்கு",
            "imgSrc": "Images/ஊ/ஊக்கு.jpg"
        },
        {
            "name": "ஊசி",
            "imgSrc": "Images/ஊ/ஊசி.jpg"
        },
        {
            "name": "ஊஞ்சல்",
            "imgSrc": "Images/ஊ/ஊஞ்சல்.jpg"
        },
        {
            "name": "ஊட்டசத்து",
            "imgSrc": "Images/ஊ/ஊட்டசத்து.jpg"
        },
        {
            "name": "ஊதல்",
            "imgSrc": "Images/ஊ/ஊதல்.jpg"
        },
        {
            "name": "ஊதா",
            "imgSrc": "Images/ஊ/ஊதா.jpg"
        },
        {
            "name": "ஊத்தாப்பம்",
            "imgSrc": "Images/ஊ/ஊத்தாப்பம்.jpg"
        },
        {
            "name": "ஊர்தி",
            "imgSrc": "Images/ஊ/ஊர்தி.jpg"
        },
        {
            "name": "ஊறுகாய்",
            "imgSrc": "Images/ஊ/ஊறுகாய்.jpg"
        }
    ],
    "எ": [
        {
            "name": "எடை இயந்திரம்",
            "imgSrc": "Images/எ/எடை இயந்திரம்.jpg"
        },
        {
            "name": "எடைக்கல்",
            "imgSrc": "Images/எ/எடைக்கல்.jpg"
        },
        {
            "name": "எண்கள்",
            "imgSrc": "Images/எ/எண்கள்.jpg"
        },
        {
            "name": "எரிமலை",
            "imgSrc": "Images/எ/எரிமலை.gif"
        },
        {
            "name": "எருக்கம்பூ",
            "imgSrc": "Images/எ/எருக்கம்பூ.jpg"
        },
        {
            "name": "எருது",
            "imgSrc": "Images/எ/எருது.jpg"
        },
        {
            "name": "எறும்பு",
            "imgSrc": "Images/எ/எறும்பு.jpg"
        },
        {
            "name": "எலி",
            "imgSrc": "Images/எ/எலி.jpg"
        },
        {
            "name": "எலுமிச்சை",
            "imgSrc": "Images/எ/எலுமிச்சை.jpeg"
        },
        {
            "name": "எலும்பு",
            "imgSrc": "Images/எ/எலும்பு.jpg"
        },
        {
            "name": "எள்ளுருண்டை",
            "imgSrc": "Images/எ/எள்ளுருண்டை.JPG"
        },
        {
            "name": "எழுத்தோவியங்கள்",
            "imgSrc": "Images/எ/எழுத்தோவியங்கள்.jpg"
        }
    ],
    "ஏ": [
        {
            "name": "ஏகபாவம்",
            "imgSrc": "Images/ஏ/ஏகபாவம்.jpg"
        },
        {
            "name": "ஏணி",
            "imgSrc": "Images/ஏ/ஏணி.jpg"
        },
        {
            "name": "ஏராளம்",
            "imgSrc": "Images/ஏ/ஏராளம்.jpg"
        },
        {
            "name": "ஏரி",
            "imgSrc": "Images/ஏ/ஏரி.jpg"
        },
        {
            "name": "ஏறுதல்",
            "imgSrc": "Images/ஏ/ஏறுதல்.jpg"
        },
        {
            "name": "ஏற்றம்",
            "imgSrc": "Images/ஏ/ஏற்றம்.jpg"
        },
        {
            "name": "ஏலக்காய்",
            "imgSrc": "Images/ஏ/ஏலக்காய்.jpg"
        },
        {
            "name": "ஏலம்",
            "imgSrc": "Images/ஏ/ஏலம்.jpg"
        },
        {
            "name": "ஏளனம்",
            "imgSrc": "Images/ஏ/ஏளனம்.jpg"
        },
        {
            "name": "ஏவுகணை",
            "imgSrc": "Images/ஏ/ஏவுகணை.jpg"
        }
    ],
    "ஐ": [
        {
            "name": "ஐக்கியம்",
            "imgSrc": "Images/ஐ/ஐக்கியம்.jpg"
        },
        {
            "name": "ஐங்கோணம்",
            "imgSrc": "Images/ஐ/ஐங்கோணம்.jpg"
        },
        {
            "name": "ஐந்திணை",
            "imgSrc": "Images/ஐ/ஐந்திணை.jpg"
        },
        {
            "name": "ஐந்து",
            "imgSrc": "Images/ஐ/ஐந்து.jpg"
        },
        {
            "name": "ஐம்பூதம்",
            "imgSrc": "Images/ஐ/ஐம்பூதம்.jpg"
        },
        {
            "name": "ஐயம்",
            "imgSrc": "Images/ஐ/ஐயம்.jpg"
        },
        {
            "name": "ஐவனம்",
            "imgSrc": "Images/ஐ/ஐவனம்.jpg"
        },
        {
            "name": "ஐவிரல்",
            "imgSrc": "Images/ஐ/ஐவிரல்.jpg"
        }
    ],
    "ஒ": [
        {
            "name": "ஒட்டகசிவிங்கி",
            "imgSrc": "Images/ஒ/ஒட்டகசிவிங்கி.jpg"
        },
        {
            "name": "ஒட்டகம்",
            "imgSrc": "Images/ஒ/ஒட்டகம்.jpg"
        },
        {
            "name": "ஒன்று",
            "imgSrc": "Images/ஒ/ஒன்று.jpg"
        },
        {
            "name": "ஒப்பந்தம்",
            "imgSrc": "Images/ஒ/ஒப்பந்தம்.jpg"
        },
        {
            "name": "ஒப்பனை",
            "imgSrc": "Images/ஒ/ஒப்பனை.jpg"
        },
        {
            "name": "ஒப்பிடுதல்",
            "imgSrc": "Images/ஒ/ஒப்பிடுதல்.jpg"
        },
        {
            "name": "ஒயிலாட்டம்",
            "imgSrc": "Images/ஒ/ஒயிலாட்டம்.jpg"
        },
        {
            "name": "ஒற்றுமை",
            "imgSrc": "Images/ஒ/ஒற்றுமை.jpg"
        },
        {
            "name": "ஒலி",
            "imgSrc": "Images/ஒ/ஒலி.jpg"
        },
        {
            "name": "ஒலிபெருக்கி",
            "imgSrc": "Images/ஒ/ஒலிபெருக்கி.jpg"
        },
        {
            "name": "ஒலிப்பான்",
            "imgSrc": "Images/ஒ/ஒலிப்பான்.jpg"
        },
        {
            "name": "ஒலிப்பேழை",
            "imgSrc": "Images/ஒ/ஒலிப்பேழை.jpg"
        },
        {
            "name": "ஒளி",
            "imgSrc": "Images/ஒ/ஒளி.jpg"
        }
    ],
    "ஓ": [
        {
            "name": "ஓரிதல்தாமரை",
            "imgSrc": "Images/ஓ/ஒரிதல்தாமரை.jpg"
        },
        {
            "name": "ஓடம்",
            "imgSrc": "Images/ஓ/ஓடம்.jpg"
        },
        {
            "name": "ஓடுதல்",
            "imgSrc": "Images/ஓ/ஓடுதல்.jpg"
        },
        {
            "name": "ஓட்டுனர்",
            "imgSrc": "Images/ஓ/ஓட்டுனர்.jpg"
        },
        {
            "name": "ஓணான்",
            "imgSrc": "Images/ஓ/ஓணான்.jpg"
        },
        {
            "name": "ஓநாய்",
            "imgSrc": "Images/ஓ/ஓநாய்.jpg"
        },
        {
            "name": "ஓமம்",
            "imgSrc": "Images/ஓ/ஓமம்.jpg"
        },
        {
            "name": "ஓமவல்லி இலை",
            "imgSrc": "Images/ஓ/ஓமவல்லி இலை.jpg"
        },
        {
            "name": "ஓலை",
            "imgSrc": "Images/ஓ/ஓலை.jpg"
        },
        {
            "name": "ஓவியம்",
            "imgSrc": "Images/ஓ/ஓவியம்.jpg"
        }
    ],
    "க": [
        {
            "name": "ஒளசீரம்",
            "imgSrc": "Images/ஔ/ஒளசீரம்.jpg"
        },
        {
            "name": "ஒளடதம்",
            "imgSrc": "Images/ஔ/ஒளடதம்.jpg"
        },
        {
            "name": "ஒளடும்பரம்",
            "imgSrc": "Images/ஔ/ஒளடும்பரம்.jpg"
        },
        {
            "name": "ஒளதசியம்",
            "imgSrc": "Images/ஔ/ஒளதசியம்.jpg"
        },
        {
            "name": "ஒளனம்",
            "imgSrc": "Images/ஔ/ஒளனம்.jpg"
        },
        {
            "name": "ஒளரங்கசீப்",
            "imgSrc": "Images/ஔ/ஒளரங்கசீப்.jpg"
        },
        {
            "name": "ஒளரப்பிரகம்",
            "imgSrc": "Images/ஔ/ஒளரப்பிரகம்.jpg"
        },
        {
            "name": "ஒளவியம்",
            "imgSrc": "Images/ஔ/ஒளவியம்.jpg"
        },
        {
            "name": "ஔவையார்",
            "imgSrc": "Images/ஔ/ஔவையார்.jpg"
        }
    ],
}



export default function Id(props) {
    const router = useRouter()
    const { id } = router.query
    console.log(id);
    return (
        <>

            <div className="bg-gray-100 h-full h-screen">

                <div className=" mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">{id} Letters</h2>
                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        <div className="overflow-hidden bg-gray-200 shadow sm:rounded-lg">
                            <div className="px-4 py-5 sm:p-6">{/* Content goes here */}
                                <div className="overflow-hidden bg-gray-50 shadow sm:rounded-lg">
                                    <div className="px-4 py-5 sm:p-6">{/* Content goes here */}
                                        <Carousel>
                                            {id && data[id].map((product) => (
                                                <>
                                                    <div className="min-h-80 aspect-w-1 aspect-h-1 w-full h-full  overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                                        <img
                                                            src={product.imgSrc}
                                                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                                        />
                                                    </div>
                                                    <div className=" text-center  text-2xl">
                                                        {product.name}
                                                    </div>
                                                </>
                                            ))}
                                        </Carousel>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}