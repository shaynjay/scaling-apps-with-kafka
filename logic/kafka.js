class Architecture {

    context

    constructor() {
        var c = document.getElementById("myCanvas");
        this.context = c.getContext("2d");
        this.drawOpenShift();
        this.drawApiGateway(this.context);
        this.drawMicroservices(this.context);
        this.drawMongo(this.context);
        this.drawKafka(this.context);
        this.drawKafkaTopics(this.context);
    }

    drawOpenShift() {
        this.log('Drawing OpenShift Box');
        let ctx = this.context;
        ctx.beginPath();
        ctx.lineWidth = "0.5";
        ctx.strokeStyle = "#84827C";
        ctx.rect(59, 1, 500, 500);
        ctx.stroke();

        ctx.font = "10px Arial";
        ctx.fillStyle = "#CCCCCC";
        ctx.fillText("RedHat OpenShift", 460, 20);
    }

    drawApiGateway(ctx) {
        this.log('Drawing API Gateway');
        ctx.lineWidth = "0.5";
        ctx.beginPath();
        ctx.fillStyle = "#FDF9F0";
        ctx.arc(60, 250, 40, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();

        ctx.font = "10px Arial";
        ctx.fillStyle = "#333333";
        ctx.fillText("API", 40, 240);
        ctx.fillText("Gateway", 40, 260);

        ctx.beginPath();
        this.drawArrow(ctx, 90, 275, 200, 425);
        this.drawArrow(ctx, 200, 425, 90, 275);
        this.drawArrow(ctx, 0, 250, 20, 250);
        ctx.stroke();


    }

    drawKafka(ctx) {
        this.log('Drawing Kakfa Box');
        // Kafka rectangle
        ctx.beginPath();
        ctx.lineWidth = "1";
        ctx.setLineDash([]);
        ctx.strokeStyle = "#CFB2A6";
        ctx.rect(200, 400, 280, 50);
        ctx.stroke();
        ctx.font = "12px Arial";
        ctx.fillStyle = "#333333";
        ctx.fillText("Kafka", 324, 430);
    }

    drawMongo(ctx) {
        this.log('Drawing Mongo Box');
        // Mongo rectangle
        ctx.beginPath();
        ctx.lineWidth = "1";
        ctx.setLineDash([]);
        ctx.strokeStyle = "#CFB2A6";
        ctx.rect(200, 50, 280, 50);
        ctx.stroke();
        ctx.font = "12px Arial";
        ctx.fillStyle = "#333333";
        ctx.fillText("Mongo DB", 310, 80);

        ctx.beginPath();
        this.drawArrow(ctx, 240, 210, 240, 100);
        this.drawArrow(ctx, 340, 210, 340, 100);
        this.drawArrow(ctx, 440, 210, 440, 100);
        this.drawArrow(ctx, 240, 100, 240, 210);
        this.drawArrow(ctx, 340, 100, 340, 210);
        this.drawArrow(ctx, 440, 100, 440, 210);
        ctx.stroke();

    }

    drawMicroservices(ctx) {
        this.log('Drawing MicroServices');
        ctx.beginPath();
        ctx.lineWidth = "0.5";
        ctx.setLineDash([5, 3]);
        ctx.strokeStyle = "#84827C";
        ctx.rect(180, 180, 320, 140);
        ctx.stroke();
        ctx.beginPath();
        ctx.lineWidth = "0.5";
        ctx.fillStyle = "#FFFFFF";
        ctx.strokeStyle = "#FFFFFF";
        ctx.rect(250, 170, 80, 20);
        ctx.stroke();
        ctx.fill();
        ctx.font = "10px Arial";
        ctx.fillStyle = "#333333";
        ctx.fillText("Microservices", 260, 182);
        this.drawService(ctx, 200, 210, 'Order', 4);
        this.drawService(ctx, 300, 210, 'Driver', 8);
        this.drawService(ctx, 400, 210, 'Kitchen', 2);
    }

    drawService(ctx, x, y, label, workers) {
        this.log('Drawing ' + label + ' service');
        ctx.beginPath();
        ctx.lineWidth = "0.5";
        ctx.setLineDash([]);
        ctx.strokeStyle = "#CFB2A6";
        ctx.rect(x, y, 80, 80);
        ctx.stroke();
        ctx.font = "10px Arial";
        ctx.fillStyle = "#333333";
        ctx.fillText(label, x + 10, y + 30);
        ctx.fillText("Service", x + 10, y + 50);

        ctx.beginPath();
        ctx.lineWidth = "0.5";
        ctx.setLineDash([]);
        ctx.strokeStyle = "#CFB2A6";
        ctx.fillStyle = "#FCD89D";
        ctx.rect(x + 69, y + 20, 22, 22);
        ctx.stroke();
        ctx.fill();

        ctx.fillStyle = "#333333";
        ctx.font = "12px Arial";
        ctx.fillText(workers, x + 76, y + 36);
        ctx.stroke();
    }

    drawKafkaTopics(ctx) {
        this.log('Drawing Kafka Topics');
        ctx.beginPath();
        this.drawArrow(ctx, 240, 400, 240, 290);
        this.drawArrow(ctx, 340, 400, 340, 290);
        this.drawArrow(ctx, 440, 400, 440, 290);
        this.drawArrow(ctx, 240, 290, 240, 400);
        this.drawArrow(ctx, 340, 290, 340, 400);
        this.drawArrow(ctx, 440, 290, 440, 400);
        ctx.stroke();


        ctx.beginPath();
        ctx.lineWidth = "0.5";
        ctx.setLineDash([]);
        ctx.strokeStyle = "#CFB2A6";
        ctx.fillStyle = "#FCD89D";
        ctx.rect(210, 350, 60, 22);
        ctx.rect(310, 350, 60, 22);
        ctx.rect(410, 350, 60, 22);

        ctx.stroke();
        ctx.fill();

        ctx.fillStyle = "#333333";
        ctx.font = "12px Arial";

        ctx.fillText("9000", 226, 366);
        ctx.fillText("1000", 326, 366);
        ctx.fillText("1000", 426, 366);

        ctx.stroke();
    }

    drawArrow(context, fromx, fromy, tox, toy) {
        var headlen = 10; // length of head in pixels
        var dx = tox - fromx;
        var dy = toy - fromy;
        var angle = Math.atan2(dy, dx);
        context.moveTo(fromx, fromy);
        context.lineTo(tox, toy);
        context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
        context.moveTo(tox, toy);
        context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
    }

    log(string) {
        console.log(string);
    }
}

var architecture = new Architecture();

// architecture.updateOrderQueue(6000);