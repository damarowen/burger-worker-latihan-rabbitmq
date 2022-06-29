import { RabbitMQService } from '@app/rabbitmq';
import { Body, Controller, Post } from '@nestjs/common';


@Controller('/post')
export class AppController {

  constructor(
    private readonly rabbitMQService: RabbitMQService,
  ) { }

  @Post()
  async PostTest(
    @Body() createPost,
  ) {
    try {
      const route = "send_email_winner_new"
      const data = {
        user: {
          id: "damar",
          username: "damarowen",
          email: "damarowen@gmail.com"
        },
        "email": {
          "subject": "DARI FDBR newww",
          "body": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
      }

      const resp =await this.rabbitMQService.send(route, data);// 15

      // return { route, data }

      return resp

    } catch (error) {
      console.log(error)
    }
  }
}


