var longest = (strArr) =>{
        let size = strArr.length;
        if (size == 0)
            return "";
        if (size == 1)
            return strArr[0];
        strArr.sort();
   
        let end = Math.min(strArr[0].length, strArr[size-1].length);

        let i = 0;
        while (i < end && strArr[0][i] == strArr[size-1][i] )
            i++;
            
        let pre = strArr[0].substring(0, i);
        return pre;
}

longest(["flower","flow","flight"]);
