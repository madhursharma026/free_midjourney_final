import { NextResponse } from "next/server";
import { exec } from "child_process";

export async function POST() {
    exec('/root/freemidjourneyai_scripts/deploy.sh', (err, stdout, stderr) => {
        if (err) {
            console.error(err);
        }
        console.log(stdout);
    });

    return NextResponse.json('Deployment successful');
}