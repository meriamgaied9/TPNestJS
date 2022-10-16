import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { Observable, of } from 'rxjs';

@Controller('first')
export class FirstController {
    @Get(":id")
     getName(@Param("id") id: string, @Req() req : Request): Observable<string> {
        console.log(id)

        return of("hello Nest")
    }
    @Post("test*")
    testPost(
        @Body() body 
    ) {
        console.log(body)
    }

}