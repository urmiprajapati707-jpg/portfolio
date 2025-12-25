class MergeSort{
    int []array;
    int []tempMergeArr;
    int length;
    public static void main(String agrs[]){
        int []inputArr={48,52,36,92,19,21};
        MergeSort ms=new MergeSort();
        ms.sort(inputArr);
        for(int i:inputArr){
            System.out.println(i+" ");

        }
    }
    public void sort(inputArr[]){
        this.array=inputArr;
        this.length=inputArr.length;
        this.tempMergeArr=new int[length];
        divide Array (0,length-1);
    }
    public void divideArray(int lowerIndex,int HigherIndex){
        if(lowerIndex<HigherIndex){
            int middle=lowerIndex=(HigherIndex-lowerIndex)/2;
            mergeArray(lowerIndex,middle,HigherIndex);
        }
    }
    public void mergeArray(int lowerIndex, int middle, int HigherIndex){
        for(int i=lowerIndex; i<=HigherIndex;i++){
            tempMergeArr[i]=array[i];

        }
        int i=lowerIndex;
        int j=middle+1;
        int k=
    }
}