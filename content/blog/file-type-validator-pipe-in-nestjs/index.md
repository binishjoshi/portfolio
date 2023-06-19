---
title: File Type Validator Pipe in NestJS
date: "2023-06-16T15:56:00"
description: "This is a guide to build a file type validator pipe in NestJS the better way."
---

Yes, NestJS does provide its own [file type validator](https://docs.nestjs.com/techniques/file-upload#file-validation), `FileTypeValidator`, that you can pass to `ParseFilePipe`. But you can also see a warning in the documentation that says the following:

> Warning:

> To verify file type, [FileTypeValidator](https://github.com/nestjs/nest/blob/master/packages/common/pipes/file/file-type.validator.ts) class uses the type as detected by multer. By default, multer derives file type from file extension on user's device. However, it does not check actual file contents. As files can be renamed to arbitrary extensions, consider using a custom implementation (like checking the file's [magic number](https://www.ibm.com/support/pages/what-magic-number)) if your app requires a safer solution.

So, we are going to build our own file type validator pipe. For the actual validation, we'll be using [file-type](https://www.npmjs.com/package/file-type) package. It checks the magic number of the file buffer to determine the file type.

Now, we'll install the `file-type`, version `16.5.3` package in our project. I'm using this specific version because of this [issue](https://github.com/sindresorhus/file-type/issues/535). I've not checked since the version 18 came out, though.

```bash
pnpm i file-type@16.5.3
```

We'll also install `@types/multer` to get file type for our file.

```bash
pnpm i -D @typesmulter
```

We're now gonna create a file `src/pipes/file-type-validation.pipe.ts` in the Nest project with the following code:

```typescript
import { BadRequestException, Injectable, PipeTransform } from "@nestjs/common"
import { fromBuffer } from "file-type"
import { Express } from "Express"

@Injectable()
export class FileTypeValidationPipe implements PipeTransform {
  async transform(value: Express.Multer.File) {
    const { mime } = await fromBuffer(value.buffer)
    const MIME_TYPES = ["image/jpeg", "image/png", "image/webp"]

    if (!MIME_TYPES.includes(mime)) {
      throw new BadRequestException(
        "The image should be either jpeg, png, or webp."
      )
    }

    return value
  }
}
```

In this example, we're checking for image files: `jpeg`, `png`, and `webp`. We're using `fromBuffer` function to extract mime type from the file buffer, but you can check the [v16 docs](https://github.com/sindresorhus/file-type/tree/16#usage) for more. All the pipe does is extract the mime from `fromBuffer` function and checks it for our required mime types, and throws `BadRequestException` if its a different file.

Now, we'll use this pipe in our controller:

```typescript
@Post('/change-profile')
@UseInterceptors(FileInterceptor())
changeProfile(
  @UploadedFile(new FileTypeValidationPipe()) file: Express.Multer.File,
) {
  ...
}
```

Now, we have access to the type validated `file` and we can do whatever we want with it.

PS. writing JavaScript for this Gatsby feels so weird after having used TypeScript for so long.
