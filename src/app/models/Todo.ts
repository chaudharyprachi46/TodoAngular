export class Todo{
    content!: string;
    completed!: boolean;
}

/*
! is used as a non-null assertion operator. 
This operator tells the TypeScript compiler 
that a property will definitely have a value 
at runtime and should not be considered as 
potentially null or undefined,\
*/ 