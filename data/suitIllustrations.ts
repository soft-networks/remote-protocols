import { whitespaceToDots } from "../lib/textTransform";

const chimeBG = `
            8            
            .            
            @            
            *            
   C        |            
            .            
        H   .            
            .            
            I            
            .     M      
.   .   .  . .  .   .   .
            .         E  
            .            
            .            
            !            
            .            
            .            
            |            
            *            
            @            
            .            
`

const astralBG = `
‘                        
‘                        
        '                
,                   *    
       %              ,  
                       l 
                         
                   a     
   ~                     
                R        
                         
     *                   
            T            
                   *     
       S                 
  A                      
                  ?      
    ,                    
            ,            
                        ,
                        ,
`

const weaveBG = `
               ⌘  ⌘  ⌘   
                 ⌘  ⌘    
     ⌘            ⌘   ⌘  
                      ⌘  
       ⌘        ⌘     ⌘  
    ⌘             ⌘      
⌘             ⌘          
  ⌘             ⌘  ⌘     
                       ⌘
                      ⌘  
  ⌘                    ⌘
                         
       e                 
             A    v      
   W                     
                        E
⌘                        
  ⌘                      
⌘  ⌘         ⌘           
  ⌘  ⌘             ⌘     
⌘  ⌘  ⌘         ⌘        
`

const flowBG = `
+=+           .          
=+=+=+         ;        +
    +=+=       .         
      =+=     .       .  
       +=+  .        =+= 
        =+=         +..; 
       +=+         .+.   
      = ;                
+   .                    
    =       +  .         
     +   f       +=+=    
      =            +=+   
        +      l      += 
          =+          + +
           =+=          ;
            +  +    0   .
          =   =          
       =+     +          
     +=    .       W     
   =+=   +              ;
  +=+=  ;             .. `


const suitMapping: Record<Suit, string> = {
  chime: chimeBG,
  weave: weaveBG,
  astral: astralBG,
  flow: flowBG, 
}

export default suitMapping;