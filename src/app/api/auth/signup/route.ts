import { NextResponse, NextRequest } from 'next/server';
import prisma from '@/lib/db/prisma';
import { hashPassword } from '@/lib/auth';
import { sendWelcomeEmail } from '@/lib/email/send-welcome';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, password } = body;

    const checkIfUserAlreadyExists = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (checkIfUserAlreadyExists) {
      return NextResponse.json('Email already exists. Try different one', {
        status: 401,
      });
    }

    const hashedPassword = await hashPassword(password);

    const addedUser = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    });

    if (addedUser) {
      await sendWelcomeEmail({ name, to: email });
      return NextResponse.json(addedUser, { status: 200 });
    } else {
      return NextResponse.json('Failed to create account', { status: 500 });
    }
  } catch (error: any) {
    return NextResponse.json({ Error: error.message }, { status: 400 });
  }
}
