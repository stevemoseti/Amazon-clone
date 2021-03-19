import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TheGrandTourS4/CHMA_S4SP2_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB413892615_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="5689487"
            title="Logitech G502 Hero High Performance Gaming Mouse"
            price={29.99}
            image="https://m.media-amazon.com/images/I/51IOmsWQVAL._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id="458654"
            title="SAMSUNG:EVO Select 128GB microSDXC UHS-I U3 100MB/s Full
            HD & 4K UHD Memory card..."
            price={16.99}
            image="https://images-na.ssl-images-amazon.com/images/I/417N4M2ulHL.jpg"
            rating={5} />
        </div>
        <div className="home__row">
          <Product
            id="4578125"
            title="Acer Aspire 5 Slim Laptop, 15.6 inches
            Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics..."
            price={364.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41vMYgD92xL.jpg"
            rating={7} />

          <Product
            id="4512451"
            title="Roku Express HD Streaming media player"
            price={24.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41Y15o6btZL.jpg"
            rating={3} />
          <Product
            id="3332024"
            title="HP 24mh FHD Monitor - Computer
            monitor with 23.8-Inch IPS Display 
            (1080p) - Built-in speakers...
            "
            price={164.90}
            image="https://images-na.ssl-images-amazon.com/images/I/51IIMW6-TbL.jpg"
            rating={6} />
        </div>
        <div className="home__row">
          <Product
            id="2224010"
            title="TCL 32S325 32 Inch 720p ROKU Smart LED TV (2019)"
            price={122.99}
            image="data:image/webp;base64,UklGRhwYAABXRUJQVlA4IBAYAABwbwCdASosAccAPrFInEekIiwT+Q7QxAsE8Tca1BBufHgWDdskoO6nvf+DzhXe+pJjNeDZlfv/8D5xf9z6uPMG8db1x/1r0L/zb/M/s97yX+69VP+J9QD+3elt/ufZE/tf+49gr9tPTg9nn+/+dzqd3znpQ9O97B9u/kMYM/0vrS/oP974z/DfUC9jf5Dgu9a8wj2S+nfsN6vX0Xmp9j/YA/mH9s9Kf+t4i/3H/VewH+g/+v9wH01f2vkJ+sPYO/X702fYb+8vspiFoMfLfxpN+EROIyN97bZmt6mZzSop2PNk8bhS9iFdtIkEU6gtVSWI6AMd+GTM5zN1KeVq20YZ8qyvTOasK9UntuvKDyhTq3uwFk3NC4kBXSDNCSChexV3MUop08Q4hnwnylGSuw+ztSm7RkfZ/egkhuFUYpULxY+FZTJjAU4XjUhgzay/zlrlj9ljvrAyMzdOuS19VBr5Nvgz/eWUG5T5ZX76ECNJ2dI8zR3ixTaMwWviyyS4/hILuNMDjgYTQjAyjat15T33J/AAFWl6mth21a97vTJGJAp6HZLRQrdQw0P1GZSh3LtXms1fK84vMbc5YZMiSqf4sj6+vPxaloyDM5piQAFZCLSdMTN/GvcOwCZRGWIqT+gEzs+PjJfDJJ35UdK6xg1xudKTOPg+6FUdoWbf8PQiFVBYp/ijvOVnQT8ifmWQBvle6LAX58zHYaVYU42eLYnCU4WkKBvZdfrcQh9y8hYvtTU3u9PBlmWkpfCimTm9aXV7k+aqlCqlSyo9voM4mzOXGv+174WS/6Dwu49W8gjIF3lQa5dk8i4LRJze3ae53u8ULuAbAzAixbgyQaRrUjOmipouQOGbAKu7Y3YPR5Nk8HzzcuOQ9oE1O5pVdsTvKSt439oyAmZ8vN3UoB4FaIrh9W0Kz6AwxpjmTl8vFAa4cNQr7Z1prgYmuPoQHcAchssymYzbd0bpXI8Ee1A1xOeemsBVqE+X3zd8NHngAXkNafmM8Xh9EBifBYczpACNFctMBkcY/t21xIsNO6aVv7KjMd6zKZ4O/WG8QT39/zZUTRH2YrAD/+unRHAvluNTjHB+itGJT75t/bbRkV9YSVyn2Y5dMXBJdIUp4rqn2//rj4y60gxn9DAa4BOON+4fPaBrljZg0VOLdvRpPBPGgxar7eAxvSYyZjGq723RorizW89ezUAA/TgLiW831G3e0gUqtTHQyqK2yLhv7tVz1T1xm5d7LnbeGZELHLTq5pO9fFiTeo1AAXjQH4HpgARLC71BKlsLqYPMgF+n7FY+w5twP8SRIq8nghIDd860AHoYa+86KkMrSp9F9jZznULkVDYdW4KcpIgzaUKAv49ZwC4sn1prInbwm0ST1B7cwC6ZkibrapoAe8MZGdZ6nIHfVzL/lkT6VzIBrKyhc2e3HF7DETOhxP1jZSFRgN1+m0TX7XAHVzGRkJ1QX8ftrzOzyFSZOH7liflUsYhYXQ65xE0M5JhERNdiRh32iX/VXxGH+eqWI4Dscd5Ra35MV438gwf/kTR5hryJVem8bc/JtJeCujd5TZMoqMZhBj1JMkSPsfslR/6aQrwBGAhVMqdbPxaZ/8KDSn01HrmPHGnLx92gULaPtbOPvsGW3QIgRvnpuwVBjMD7jg57ggoNy1p/DKyLBtTouuJ78tA1qOjRvoZIbbC9bw9qcFh+WMQV1Empm9lDDqgStjMDbb1FCblTRsLX47oakbRE2iQQsa6XjA4db6xTV2eGCLq4I2OTV3SvoSu++3sHtUMAv0Z6MVjvriG/wJnQ+ysO/oZRlWJQwaiMXFg/E6HU7E8T/5MfnvVRqpbMdK23HoifHr/M0VHAjgjJZtlk+zYcIKled6sPVgwzi1Ef06bOQN4M5mixwmfwS7mUIdXsDz4RIM8w8TlV8aQh0cEgwDGO9tJav+DBmFW1wgunudKKgjqZPzZFGo8IR1sYLKR46PGYMC7GgNTs/tAdaUXRmdJQXdZlV/nulaR+ptwuXu39dwUc+w7fgpwx0rF3KDxxaDGh7+648WUf7SFU2gQ3c3PCDuyot9m8P7jfkLDm6tyl1GSa+fUyH0HD0qWpvD4yfS9a3NoAnSFdn6noim9QORWZFGOEclMzckz1NjJ++xxgEPQOWpNxqpCQ8xaxmo7669paCEh2Onab+kbuYYeE/m9nKcG96kP9T6Jgp8Vma1902z262bF9n/KHaiklmd//FZ3lY7fEH8v6WiI4imqjmDhWnw3L2Ee+aMFQfp3kHre90pIEKDQnwsEUAy2ZbRTrdXbuNqytaIkh78jURu8JfYUsJ3y9OSd5xMa1kQKfZStynAHvaGVt1z9dQuPiETBfVp8rJdOFAphYiCfNIomvOp0pzZXelDjc8Gs7PSqo2RFWd51Hz99mI4wKKXHdU/2/6220IyViOk3VcqnlsducS+415LPK8Txpe078aDreLNRvEK4mVxJMd8hbtBxfiRkz11GDMR4wy3yoo1w+SHFrFdwXPmHhVGLcRImhMDFj1UVWXbVfWko20DDGOOrk5a2mOCEJpGmLP3SpXS8BrLqTGFlS7JRMNttaUdHu8SHSclbtQBFHfcvQ+3d0CuWGXm0klpoLWFLhTiB0u3I1QFoTRmV2X/APx74XkntvSl6KYfmshBbTeohHrCbOVLRj+M70e4cNDzvylS7MtEawU/vt8BJ8hhI2wqI4XvHbZCgharWgePjQTOMDrkbkdrhNYDFUeSWjbr4ZRa2nvn9S49TjgzRy2PCH5za+u27o7AvKYmee3A5ufsquqhn5XwPgczwSRrrzzUQQg8zZYFFmr1h/jHDb2+O3TYJvThX+TikQpJNbjsCZwuKzTIoc6ZtDRQ4rnf0eSn7n81FVfFQEqXcQfemPQ7MlR2GVvRtHAlGBZIpw/BAocAFM1Kqo81ukT6Pb0cMbIP7Xyln9r6HeRpwou+FBhjPvvVBTBZ9HIF9rb0zGUjksAvqVD+HWxhajTHp8HnS4pvWvTrMNiR6Gn019PHcU51m/5QWQrwYfvl71nwfTS4D5fyxRPWWr0SivFZkZN6mYw7vu0GtFQSc651Y1UnjvWPhVmyJ8eN2YDu4xZuWvJ3v+lfe9xYO1T8AixvtxoD4evdM5S5MwDmvRTnCytKmv/EVHK0CE+04dF2j5TVsugfKipgM8XcB2UhqdQvVpB8vxBetilbRcRd9Z8IqKofPS95cTaT4+BNcOqA79wwbRbi4KDeaWSbF9tZjnxjsRF5CczMYbQ8YMHbwgrA8NOiYdED+r2cVVJv28NY2K3eLqp64mlvZSv+ViUBbj7hP9JYqYu0hp7gU8bKjxY8OD0sgwd4ewLs4jDmS51fsWrG2QF7tE+GW2uJzrp8TBGUFqVvpNmV6gbzQhVxqsK5xm/OiW0dkEEltIF57KAhXLWhbhQA40AM8wcy6t6FNqxbNaNbz0+AINmiGTnkSreDRzdnZETIDgd7GrnbHwCrvYdFzRfrkyGIHC2l88GvX2jhbg8ZGkiX3UHmrgdF1EkpeNqpO23TpCA2f9wqw1Qv9Di/bjVKaLBCFJmT6wvOrjzIxbd9eGDV0hTwf+KnCFwwK8ed5zkHjaQJOWJYyzaJJW7gOjooA3fCW2UZdVQZMm+fEJ5ssXY6kSw2IXL2YUmUsQ9FWwJW6Yi3cS7qW+YCI6htEDI0F0ObTI/7eXZf0bzYLFBWCzj+xaF4bE9l1iR77QK+TF8/8tGm2vov90VWcJG2GCtxScYVWb69SnBjOZs7XzGIhZ74TfVR8qDD68L9Ymnyan2zlo5CDxludEliY5FJWvvDSkumQuhCE1eO1AWMRMkheoDvUQY07KQLV8xm3OisbZiLEG8dhGv0EAustehQfIsHRILsnHyHDWub8CLbnwUnt7L9017HP6j758uRPD7mR83DnCEsKy2/v+9BKk72GBNBRLFdvTs7z0zQ9yfyF309PDkCpguwSDeWl05eoJ4PMweO482iTxGqszc189pCSfhXH74n6xBPERBBrzU+AtTzaXWyKi3XWFCLL6qDP5ERcoEHvlFWGIpEI13RLSig9UZooLsYmuzLTMw/W4Wzyzg+OA+Z+uFTNOxwmfd52n4/wh3qjICmdw6XW7vHQiFfr1Llhn1jvBH0xVNinXSjZPaIONS7ggnfwCha1kLGloiCx9DoA9od+zQhhC4/eaSaCkl2QVURKxDgEBRdlKOqyI6hPbWPFfxGiuo9qtRUVsAgNqWJipBsYk6VKPAD8V6/6D9eeXd3wIyZkmBJaTXmr5PPzaZ81CkbFVShvRW4OdOoBaYvEi78WC7xgKXzqeOA5Gm3/rA/0UmSN52KsRm6zxi/x5dk2ahctkJBoUWgYoBH0wNhfBcHY1nWtUCWbiMk/GeiyTbtLflIO7MQiAbjwnHeDz9N9pSMsLK0KNn0vlLlgkeFv17X1KDaDbW6GnCrLuSQezW5KGcK2qtl/XIXGVps9frwE/LES57quGTL7P+qdtUIEDXEvkDrzbzNO9/t55g1+2Zi8poAMS6qMYva3L/5nQdRwpDit6Ik+1O3KY04tnNy6QQI5zrW+lH01d7Cwx733a/Fu0j+/3uK+g5sFkV+cC1ZzuDBLNafSQfLDuewgHmyd875JPNlvs9WlO13cnlVj287y3OGAO7Yvxn6LDTSS4o/biz1g5wEgA4QWVeMjASRSyJsJPijT0lhdSuNj6olRM/QM1UOHOsEmBXrT5zq48FlEp01DHE0rHMspOcUPkuBNOI/NXKKylfDw+Tta8e9lJjOPnrYRcfLSOSEmS/9zEVwBx/78b4ly+pQRlNXIey7F17JfHS6w3SvneNSH/EHb7Y3R8JduvbDrXFbHLWcwv1Ox9Q/XiiaQj2bzwG+f3EcmRMrpq70PuseNZyDzx2KaGeCrjlx5504d2ayUopIPEFA3TtewcHf7XQzIyFIyEUYRsjnLM3o6qM0c8zXShHZmmv4v6qEEsPO41UWde6Xeq64SCB+TjLLUtokPn6WYCAIZe5628HebGCCUYZjQMlJhIJRvM6Up7cRJP1gimPQp7MoyGgQ0/V4ZMYJgc1LFSX+gESZ1RhEjBKzznP+inoSOL5VWHnlTwNNkPgzWN/NhCLFKqZDf0NOBcAng6JLCho7U6l3qs/v5D0o2CTBn/LVnyRDvDmIhb0dtelPd3usvN/UaPe3uCrLfEJJJLPxgRC4HZmCIjmLby/61/+WaEC4F2Ia7LtIw809wY8MyOV/zpJkfWreEKxPC2bu8qrnJEf+UItM3AglswTd51sUwueFRJmZ9IZiPOv+WOV2GErKN3FmwMB1GN3+68KoY0TlaIkMcFk6/630mScNLW67Ia0DVcFddL53uvBaAmku2R2NcWYvOr9XgsDHABdx3sFrWE5+32v9uM+1rPXdCv+sMrQoidmRkalHLiTfMxhJePadofKaHip848/OUkK0cIzNrZVz2b9vVL0XBjeuxjFT3wcLfCgs4giAiMngLb2LmG+zYffsht5EABHJR9It1LBH/CkzWHkCbOBUYXSclyearY9cks4bE5VXm3fbywo23JUD0je68ivnq6NYpDy+GywD4Ofq8Xzd5/gtytUyrUjzy3smm0cw0kkTSWJE2uABAVeLie2Ny7Dicd+wI4+ZIYYJwSGyPk0Q62DWLkQU5AVrAldjkGbKaY3UN5b16pQvyR412TK+dm2f4rBUEV0muQz0rdiU+KGdLfg83t7ED2dsfF4eJSc5ls+qZ1K6QGsJS1Jm9MoJxHxQlcinjvn/7+SDsDFKSPrXts5Vymio2b7XowS7XhYnz8u9PabvLmZu2HWJQWsa9Zc/95HIDbPo0E02NZXNuP2s297BFiJ8fuDmGzQxknJUK7HtLR/WLybwxZs8WPU7HWFPBoCy5vXkkEcTnTGjd7EOUxHxmD4LNIB0PXDOAEhqF8LtpevUvRHNStW/GSBGfcsr+0P36Nv1uFO4wY/26v6y4ZW9kg+ZiiDf+O2HHmyvMabQdnGNMzCDKoZ/xxLH8rlorS8fxtu7H15kjoln8gX4Vvs2Defs4Kv3EKV67XIAbYEPqCqZ62g23BhExSvaL2stawj/A5PZa61nrz+O8HWwXxuoS0G17hSM/fgAPApauth6Qk1jacJ4xLM1Pxw7I5rINPwUz6DsPuf/+GNAAKbqcxOCs0pmEjKqXiRTyomw72AXmas6Ew+aqyWbh7tbab27TtWCUSkVbNtiS1E+/dyI+Z96G6lXN35tXmvG+bWR35/gREvukD1RL4UHGZAxc/pODvG7zztAjT8YSHQKFaxucUSvFzJKuvT77XgFSifr3omhQpvJW/zyB7uFXmQEEAiYVklsgxcBsZ6Ii5ToO10Lve241WA1q4DdvFQrPMrqmV+9qxv/Ktl2tiR5+DaVVeFWLHjv65uCZGWvGQb5i+u3apWUaqfcBvhaB2UW0PivdpMi9S4/nD38nmrM0N4phfcsrzJ2m7ZNBQQs7bicJXX2de1w/NzjanbkqpUhEdTiOGkS4ctqfNX98IzjlUBnl7jtFuIy/rEP+jRYjwPdB983K61F0hdd+KYeCkg6pGQtyejhnV2dEoZXs8Sd5S7McKajBrLOI59yN+vvcGWLe53bBJxWaFnU+ZpQGXePKYFTa7/RKJ//VxzqQUErFrECF9uXUHdu+IFfIwpYTEsvOjIhn5au+WE/VnbwOo7EHr4GTiiMhuOSNaXin0ObRVxzs711j7lCA2O01WwTsUme4X11T3wcg0p8LDOVpYzuPcyWIhpARnno6MdP8vYyF8TDXRXTy/rP+iqTVpwW8bgJtq8NFQoesGxwLRyAWmVIRywxhYK6U/eARxjSrtoHmZs3n33Jf3xfv3uXOC7tpYX8rQ8xXyfDD+wW7Bue+rGit+G130JJYKqzwXe5jNtLl0qaar82u3lRheBrPa73siawm0sy3o2tG2uQJS6bCq+cGAMtiSiXgKHNgNjmAcn0pwTjrvIzG8Ux0T3oJByE6iOlsul8v9nAhbAKNJNUwBsmyqzvpIsSqW0R5lR4bTefZN/lK51QcOQLYCDEJ01zsEW6FinuyuZ4jQAoKdLC2s261KQx0jOW3aMObgrLETCnYddOMWYK/QAFlDLRpaZ1R3EgL1yzMlZ0VEoiTOc2Wi7LddxbuTgJzamVZ4pQmllqGrGWiEIN/xtRVgs6kJc7vdbtO0a7YjyNvDl7Ci/yQ397rouOioXQsO1vr4+/7dPUCTPWC0kpoMPq/p1I5P9eMZjD/rxjMUT6g/o0Pn7OLn9oLu6JXWnEDYBJNPVLe5deR3EZArtAmyqNb773Xk2HqAfgu/09+MsMqDctvYD9G+71xawIlfjV15g2oPPE6JzMV2dyz3naB9e/JsDPvdc+J37kXF/A85o0TO8CSIz47tB/jwU4PVGzZwFVOIRyebcdHqKz/kwRAH2WRk2mBlAX8Q8kKzrQDIyTuO1y9gDtYM5iE6M4Kmfy/yFWALyuuoC+mDSIw7otqhPdBc20ywGbI9dlIX3AL+wDH/LPa8uMIo/qICAlI2rHPSfzQznIyDtjfbi4b1OEN6dfL7lrsCEnSeTnGWkDg+s6uykBQtqTyWwuG9NFeYSvvpD5PTIgjooqTbvf6+IQN2EfH2azBhXGSEs6pi92y09qrO0v/XSjW/4VMhkzD6NXtlwnAcrydKIK8BryQC300TvABJnKYq4VbDAhG6V0oLEVlVcUM2fkWRh116j8Uf05zXwCPqFvbif/ND4LeuYsQ1tOonpyVG2W5uhys6kb72ILQ/YL7KAdr5M03h++llmsu+OZo1B3sHPVtuEJMMrDpRVigfwDy2UmujxRXjvDsnaiyeqATtQtssIW3JkKld6+gcK8jKPDjH6q2q89ccuNm00ZXmDSr9JkwMUWZqeziDa6xAvM+8lp8TMfgdMkHmENZ0ljfcUOQIftOouh/3lGW8ub7fMRL/BL8jPf9cH9cwetKg7X+KZEzha7xR7mmvmJOurt+SMK+JDeJO+HCM/tsNZKo9rkxdVzr5iGm592PDXbCETnetfkV9C4FyYxADgZKa1UNOrRjk6nd1eKtE6u6Ha7jHL1BVZ35XMN3TaGXvOzSdFKXOVJLNShKHffPo5KYUuaVNZx2KH+zeFTR7fOTVy/hywiN4r9/WjrmjYtdfHK+Pc9zACVwAAAAAAAklkb3i0VdEfFmFixnPznQURjbYkV2Brw1TmQ8ZG2lmlDl6AAAA"
            rating={4} />
        </div>
      </div>
    </div>
  );
}

export default Home;
