function check(num,gen)
{
    if(gen=='f')
    {
        switch(num)
        {
            case -1:
                console.log("Mother")
                break

            case -2:
                console.log("Grand Mother")
                break

            case -3:
                console.log("Great Grand Mother")
                break

            case 0:
                console.log("ME")
                break
            
            case 1:
                console.log("Daughter")
                break

            case 2:
                console.log("Grand Daughter")
                break
            
            case 3:
                console.log("Great Grand Daughter")
                break
        }
    }
    else if(gen == 'm')
    {
        switch(num)
        {
            case -1:
                console.log("Father")
                break

            case -2:
                console.log("Grand Father")
                break

            case -3:
                console.log("Great Grand Father")
                break

            case 0:
                console.log("ME")
                break
            
            case 1:
                console.log("Son")
                break

            case 2:
                console.log("Grand Son")
                break
            
            case 3:
                console.log("Great Grand Son")
                break
    }
}
}

check.call(this,1,'f')