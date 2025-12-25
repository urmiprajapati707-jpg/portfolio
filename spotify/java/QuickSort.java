class QuickSort{
    public static void main(String args[]){
        int[] a={15,9,7,13,12,16,4,18,11};
        int leng= a.length;
        QuickSort qs=new QuickSort();
        qs.quickSortRecursion(a, 0, leng-1);
        qs.printArray(a);


    }
    int partition(int []a,int low ,int high){
        int pivot=a[(low+high)/2];
        while(low<=high){
            while(a[low]<pivot){
                low++;
            }
            while(a[high]>pivot){
                high--;
            }
            if(low<=high){
                int temp=a[low];
                a[low]=a[high];
                a[high]=temp;
                low++;
                high--;
            }
        }
        return low;
    }
    void quickSortRecursion(int[]a,int low ,int high){
        int pi=partition(a,low,high);
        if(low<pi-1){
            quickSortRecursion(a, low, pi-1);
        }
        if(pi<high){
            quickSortRecursion(a, pi, high);
        }
    }
    void printArray(int[] a){
        for(int i:a){
            System.out.print(i +" ");
        }
        System.out.println();
    }
}