import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('first')
export class FirstController {
    @Get()
    getName(@Req() req : Request): string {
        console.log(req)
        return "hello nest"
    }
    @Post()
    testPost(
        @Body() body 
    ) {
        console.log(body)
    }

}