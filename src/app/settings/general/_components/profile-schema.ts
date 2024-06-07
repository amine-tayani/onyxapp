import * as z from 'zod';

export const profileFormSchema = z.object({
  name: z.string().min(2, {
    message: 'name must be at least 2 characters.',
  }),
  email: z
    .string({
      required_error: 'Please type an email.',
    })
    .email(),
  bio: z
    .string()
    .max(160, {
      message: 'Bio is too long, 160 characters max.',
    })
    .optional(),
  links: z
    .array(
      z.object({
        url: z.string().url(),
      })
    )
    .optional(),
  avatar: z.any().optional(),
  banner: z.any().optional(),
});

export type ProfileFormSchema = z.infer<typeof profileFormSchema>;
